import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnk1gt9lb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnk1gt9lb"/>`,
		"fallback": "icomoon-free:file-empty",
	});
}

export default Component;
