import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djm6anb2m.css';
import '../../css/h/h733sybjg.css';
import '../../css/b/buxpgubkb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="djm6anb2m"/><path class="h733sybjg"/><path class="buxpgubkb"/></g>`,
		"fallback": "fluent-emoji-flat:biohazard",
	});
}

export default Component;
