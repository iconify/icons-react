import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rxxld_bnp.css';
import '../../css/h/hxyh7mrat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rxxld_bnp"/><path class="hxyh7mrat"/></g>`,
		"fallback": "hugeicons:bedug-01",
	});
}

export default Component;
