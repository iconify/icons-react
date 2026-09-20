import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hdd07c15n.css';
import '../../css/j/jsz_f-pus.css';
import '../../css/v/v_wcr0b8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hdd07c15n"/><path class="jsz_f-pus"/><path class="v_wcr0b8d"/></g>`,
		"fallback": "mage:divide-circle",
	});
}

export default Component;
