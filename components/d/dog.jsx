import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/isc99_d8g.css';
import '../../css/o/on9kbqb3p.css';
import '../../css/i/i6vz6ibrb.css';
import '../../css/w/wseixtb1u.css';
import '../../css/v/vjr8b9jwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="isc99_d8g"/><path class="on9kbqb3p wm-shine"/><path class="i6vz6ibrb wm-k"/><path class="wm-a wseixtb1u"/><path class="vjr8b9jwh wm-deco"/></g>`,
		"fallback": "withicons-kawaii:dog",
	});
}

export default Component;
