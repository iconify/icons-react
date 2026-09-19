import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc9l2mb-j.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc9l2mb-j"/>`,
		"fallback": "dinkie-icons:glyphs-filled",
	});
}

export default Component;
