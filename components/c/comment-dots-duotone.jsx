import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kpo-tqbbu.css';
import '../../css/q/q8d6_qb5x.css';
import '../../css/u/uk2k___8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kpo-tqbbu"/><path class="q8d6_qb5x"/><path class="uk2k___8l"/></g>`,
		"fallback": "iconamoon:comment-dots-duotone",
	});
}

export default Component;
