import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0jc9qlwi.css';
import '../../css/e/edykgp0xs.css';
import '../../css/c/c3bf_ebrx.css';
import '../../css/v/vjimy6bso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0jc9qlwi"/><path class="edykgp0xs"/><path class="c3bf_ebrx"/><path class="vjimy6bso"/>`,
		"fallback": "solar:chat-round-code-bold-duotone",
	});
}

export default Component;
