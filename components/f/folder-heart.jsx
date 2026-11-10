import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l6bep90pz.css';
import '../../css/w/w7x7mnb8d.css';
import '../../css/s/suqsr126y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l6bep90pz"/><path class="w7x7mnb8d"/><path class="suqsr126y"/></g>`,
		"fallback": "andrsrxn:folder-heart",
	});
}

export default Component;
