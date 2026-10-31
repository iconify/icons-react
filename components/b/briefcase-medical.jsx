import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vbpmzobns.css';
import '../../css/f/fci040b3y.css';
import '../../css/y/y3j3vjb4e.css';
import '../../css/h/hayg57blh.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="vbpmzobns"/><path class="fci040b3y wm-shine"/><path class="wm-k y3j3vjb4e"/><path class="hayg57blh wm-a"/><path class="i49wp7b0m wm-deco"/></g>`,
		"fallback": "withicons-kawaii:briefcase-medical",
	});
}

export default Component;
