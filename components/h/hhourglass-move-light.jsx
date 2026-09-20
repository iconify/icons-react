import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hb6_k0b5d.css';
import '../../css/w/w22h5lbit.css';
import '../../css/b/bpypuqqif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hb6_k0b5d"/><path class="w22h5lbit"/><path class="bpypuqqif"/></g>`,
		"fallback": "lets-icons:hhourglass-move-light",
	});
}

export default Component;
