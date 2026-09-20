import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nc7jdzbqu.css';
import '../../css/k/ke5swub4s.css';
import '../../css/x/x3a30sb5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nc7jdzbqu"/><path class="ke5swub4s"/><path clip-rule="evenodd" class="x3a30sb5d"/></g>`,
		"fallback": "nrk:go-backward-30",
	});
}

export default Component;
