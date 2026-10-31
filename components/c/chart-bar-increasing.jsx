import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jjte1tbhr.css';
import '../../css/r/ralcq11vz.css';
import '../../css/s/skn8acc-z.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="jjte1tbhr"/><path class="ralcq11vz wm-k"/><path class="skn8acc-z wm-a"/><path class="klzcy0ogc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:chart-bar-increasing",
	});
}

export default Component;
