import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jzcfmxbdn.css';
import '../../css/u/u6u5rt_cg.css';
import '../../css/f/fomiglfis.css';
import '../../css/e/eell-kb9g.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="jzcfmxbdn"/><path class="u6u5rt_cg wm-shine"/><path class="fomiglfis wm-k"/><path class="eell-kb9g wm-a"/><path class="klzcy0ogc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:cable",
	});
}

export default Component;
