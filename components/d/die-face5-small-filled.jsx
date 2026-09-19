import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0xll1iqe.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0xll1iqe"/>`,
		"fallback": "dinkie-icons:die-face5-small-filled",
	});
}

export default Component;
