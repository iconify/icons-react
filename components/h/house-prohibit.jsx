import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s989pofgt.css';
import '../../css/g/gsvrl7yuk.css';
import '../../css/h/h8_i6snvr.css';
import '../../css/f/f8et09b3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s989pofgt"/><path class="gsvrl7yuk"/><circle class="h8_i6snvr"/><path class="f8et09b3k"/></g>`,
		"fallback": "andrsrxn:house-prohibit",
	});
}

export default Component;
