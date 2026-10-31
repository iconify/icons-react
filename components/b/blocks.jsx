import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/c/c20pm8yit.css';
import '../../css/y/yfcmbwbvg.css';
import '../../css/c/cfp4t-bfv.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="c20pm8yit"/><path class="wm-shine yfcmbwbvg"/><path class="cfp4t-bfv"/><path class="klzcy0ogc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:blocks",
	});
}

export default Component;
