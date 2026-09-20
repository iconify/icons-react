import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ao-hsebgv.css';
import '../../css/z/znyb6bi1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ao-hsebgv"/><path class="znyb6bi1c"/></g>`,
		"fallback": "proicons:file-add",
	});
}

export default Component;
