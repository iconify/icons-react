import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/m2zya9vwm.css';
import '../../css/e/ermcdhbic.css';
import '../../css/w/wdxk95bqv.css';
import '../../css/a/a11ka0e9d.css';
import '../../css/x/xluvpbbtt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="m2zya9vwm"/><path class="ermcdhbic"/><path class="wdxk95bqv"/><path class="a11ka0e9d"/><path class="xluvpbbtt"/></g>`,
		"fallback": "icon-park:baby-bottle",
	});
}

export default Component;
