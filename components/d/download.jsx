import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8ad-p7us.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8ad-p7us"/>`,
		"fallback": "icomoon-free:download",
	});
}

export default Component;
