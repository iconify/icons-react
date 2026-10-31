import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/q/qnx6dabxa.css';
import '../../css/p/pvtp0kbfd.css';
import '../../css/p/pf3euhbfs.css';
import '../../css/v/vbo3wkb9c.css';
import '../../css/x/xit9yz7vd.css';
import '../../css/f/foge33gqc.css';
import '../../css/x/xa1xkkrvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGiS4mDeNY" x1="10" x2="14" y1="2.5" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="qnx6dabxa wm-k"/><path class="pvtp0kbfd wm-deco"/><path class="pf3euhbfs wm-k"/><path fill="url(#SVGiS4mDeNY)" class="vbo3wkb9c wm-k"/><path class="wm-shadow xit9yz7vd"/><path class="foge33gqc wm-shine"/><path class="wm-shine xa1xkkrvy"/></g>`,
		"fallback": "withicons-valentine:avatar-owl",
	});
}

export default Component;
