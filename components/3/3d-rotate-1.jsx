import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v-q54ztnr.css';
import '../../css/q/qqub6hb-t.css';
import '../../css/d/dln8ziysl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="v-q54ztnr"/><path class="qqub6hb-t"/><path class="dln8ziysl"/></g>`,
		"fallback": "streamline-flex:3d-rotate-1",
	});
}

export default Component;
