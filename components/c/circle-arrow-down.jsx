import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_sg2v3ed.css';
import '../../css/j/jjy8trk4k.css';
import '../../css/z/z2oo-7b-p.css';
import '../../css/j/jfytd4b0q.css';
import '../../css/z/zlawzni-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n_sg2v3ed wm-k"/><path class="jjy8trk4k wm-k"/><path class="wm-k z2oo-7b-p"/><path class="jfytd4b0q wm-shine"/><path class="wm-k zlawzni-r"/></g>`,
		"fallback": "withicons-anime:circle-arrow-down",
	});
}

export default Component;
