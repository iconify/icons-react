import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5m2b65fm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5m2b65fm"/>`,
		"fallback": "icomoon-free:folder-open",
	});
}

export default Component;
