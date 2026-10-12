import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ul7faub8f.css';
import '../../css/v/vjzle0-2a.css';
import '../../css/s/sk6yx2hhy.css';
import '../../css/y/ycp60cwpz.css';
import '../../css/g/gj4ws9bin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ul7faub8f"/><path class="vjzle0-2a"/><path class="sk6yx2hhy"/><path class="ycp60cwpz"/><path class="gj4ws9bin"/></g>`,
		"fallback": "andrsrxn:dog",
	});
}

export default Component;
