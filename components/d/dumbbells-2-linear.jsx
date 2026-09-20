import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g6gq_0b-j.css';
import '../../css/s/sj2ti4jlw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g6gq_0b-j"/><path class="sj2ti4jlw"/></g>`,
		"fallback": "solar:dumbbells-2-linear",
	});
}

export default Component;
