import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvq38mb0h.css';
import '../../css/n/nt4f7-b5n.css';
import '../../css/s/snd_6_f8v.css';
import '../../css/u/ugbsgbctj.css';
import '../../css/d/d0xpdiott.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(45 10.1 7)" class="mvq38mb0h"/><path class="nt4f7-b5n"/><path class="snd_6_f8v"/><rect transform="rotate(-45 9.26 6.16)" class="ugbsgbctj"/><path class="d0xpdiott"/></g>`,
		"fallback": "andrsrxn:baby-bottle",
	});
}

export default Component;
