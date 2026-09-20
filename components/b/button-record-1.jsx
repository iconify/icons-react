import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dln8ziysl.css';
import '../../css/a/ak4uk02_l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dln8ziysl"/><path class="ak4uk02_l"/></g>`,
		"fallback": "streamline-flex:button-record-1",
	});
}

export default Component;
