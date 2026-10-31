import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/n/nciqnqb3q.css';
import '../../css/m/mtaq71okw.css';
import '../../css/r/r_45fibgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="nciqnqb3q"/><path class="mtaq71okw wm-shine"/><path class="r_45fibgk"/></g>`,
		"fallback": "withicons-kawaii:crop",
	});
}

export default Component;
