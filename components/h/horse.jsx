import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yo93lmb2j.css';
import '../../css/n/nh_pdvb5m.css';
import '../../css/g/g8ni9tbxa.css';
import '../../css/j/jl8-g1ble.css';
import '../../css/z/zglv-ty5x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yo93lmb2j"/><path class="nh_pdvb5m"/><path class="g8ni9tbxa"/><path class="jl8-g1ble"/><path class="zglv-ty5x"/></g>`,
		"fallback": "fluent-emoji-flat:horse",
	});
}

export default Component;
