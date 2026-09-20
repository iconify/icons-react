import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/emxrn1bsn.css';
import '../../css/j/jyo_x8rvu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="emxrn1bsn"/><path class="jyo_x8rvu"/></g>`,
		"fallback": "streamline-flex:cloud-off",
	});
}

export default Component;
