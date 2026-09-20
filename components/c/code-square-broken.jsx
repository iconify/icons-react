import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b_mqzbbbw.css';
import '../../css/o/o0vcg8bqt.css';
import '../../css/v/vx9mvac0z.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b_mqzbbbw"/><path class="o0vcg8bqt"/><path class="vx9mvac0z"/><path class="si_mtzbvj"/></g>`,
		"fallback": "solar:code-square-broken",
	});
}

export default Component;
