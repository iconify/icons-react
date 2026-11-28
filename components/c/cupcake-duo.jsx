import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzzl3ybmf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/iv8z1eyqm.css';
import '../../css/f/fg2wsdb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzzl3ybmf secondary"/><g class="dt0cm9dhy primary"><path class="iv8z1eyqm"/><path class="fg2wsdb7a"/></g>`,
		"fallback": "iconaut:cupcake-duo",
	});
}

export default Component;
