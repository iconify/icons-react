import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjdn7rc0o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjdn7rc0o"/>`,
		"fallback": "cil:comment-bubble",
	});
}

export default Component;
