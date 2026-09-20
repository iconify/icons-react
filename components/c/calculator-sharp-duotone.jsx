import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/z_zygfbdd.css';
import '../../css/n/n2gzo9r6m.css';
import '../../css/w/wx6aefbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="z_zygfbdd"/><path class="n2gzo9r6m"/><path class="wx6aefbne"/></g>`,
		"fallback": "keyline-icons:calculator-sharp-duotone",
	});
}

export default Component;
