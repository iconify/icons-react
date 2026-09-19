import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/solijxaxw.css';
import '../../css/u/u1tpowbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="solijxaxw"/><path class="u1tpowbtb"/></g>`,
		"fallback": "hugeicons:glass-water",
	});
}

export default Component;
