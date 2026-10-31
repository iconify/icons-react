import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/itqddhhfx.css';
import '../../css/k/klb_rwbsj.css';
import '../../css/i/iv5gvhbea.css';
import '../../css/c/cn2f9dbpj.css';
import '../../css/o/oc96mnvuf.css';
import '../../css/u/umvgb2fhw.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="itqddhhfx"/><path class="klb_rwbsj wm-s"/><path class="iv5gvhbea wm-shine"/><path class="cn2f9dbpj wm-k"/><path class="oc96mnvuf wm-a"/><path class="umvgb2fhw wm-s"/><path class="klzcy0ogc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:globe-lock",
	});
}

export default Component;
