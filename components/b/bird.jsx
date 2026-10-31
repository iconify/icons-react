import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zg6ektbku.css';
import '../../css/c/cz2sw-trg.css';
import '../../css/r/rh4xnjbsc.css';
import '../../css/m/me8qf1b1v.css';
import '../../css/j/j3xl1tijc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="zg6ektbku"/><path class="cz2sw-trg wm-shine"/><path class="rh4xnjbsc wm-k"/><path class="me8qf1b1v wm-a"/><path class="j3xl1tijc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:bird",
	});
}

export default Component;
