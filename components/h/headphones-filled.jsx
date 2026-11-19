import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_r2ripro.css';
import '../../css/z/z6nk96o2v.css';
import '../../css/b/bwrek3eeo.css';
import '../../css/w/wtqmkcwqo.css';
import '../../css/h/hu6ftn14k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n_r2ripro"/><path class="z6nk96o2v"/><path class="bwrek3eeo"/><path class="wtqmkcwqo"/><path class="hu6ftn14k"/></g>`,
		"fallback": "andrsrxn:headphones-filled",
	});
}

export default Component;
