import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/a/a36hiiv_a.css';
import '../../css/k/k77d33bvz.css';
import '../../css/v/v1-4p94qb.css';
import '../../css/b/bks8p5ymf.css';
import '../../css/k/k78y_rbii.css';
import '../../css/j/jmli6ob0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG90q4wAtA" x1="10.01" x2="14.01" y1="6" y2="18" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="a36hiiv_a wm-k"/><path class="k77d33bvz wm-a"/><path class="v1-4p94qb wm-deco"/><path class="bks8p5ymf wm-k"/><path fill="url(#SVG90q4wAtA)" class="k78y_rbii wm-k"/><path class="jmli6ob0q wm-a"/></g>`,
		"fallback": "withicons-valentine:battery",
	});
}

export default Component;
