import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pgtxoq_7g.css';
import '../../css/r/rsuz-abdo.css';
import '../../css/x/xxezz29qb.css';
import '../../css/m/md6x1cc6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pgtxoq_7g"/><path class="rsuz-abdo"/><path class="xxezz29qb"/><path class="md6x1cc6z"/></g>`,
		"fallback": "reicon:cloud-snow2-filled",
	});
}

export default Component;
