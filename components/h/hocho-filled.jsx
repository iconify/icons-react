import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkdn7u2si.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkdn7u2si"/>`,
		"fallback": "dinkie-icons:hocho-filled",
	});
}

export default Component;
