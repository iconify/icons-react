import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tohp91dov.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bu_5_sd4o.css';
import '../../css/j/jjy36xb2g.css';
import '../../css/g/g6yzo1b_z.css';
import '../../css/f/fv82wzbex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary tohp91dov"/><g class="dt0cm9dhy primary"><path class="bu_5_sd4o"/><path class="jjy36xb2g"/><path class="g6yzo1b_z"/><path class="fv82wzbex"/></g>`,
		"fallback": "iconaut:clipboard-list-duo",
	});
}

export default Component;
