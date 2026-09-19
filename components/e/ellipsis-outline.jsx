import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/kgoe69b6c.css';
import '../../css/i/iu5_1fbyz.css';
import '../../css/e/enlxepbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="kgoe69b6c"/><circle class="iu5_1fbyz"/><circle class="enlxepbgk"/></g>`,
		"fallback": "bitcoin-icons:ellipsis-outline",
	});
}

export default Component;
