import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hsyz2fbso.css';
import '../../css/s/sj2ti4jlw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hsyz2fbso"/><path class="sj2ti4jlw"/></g>`,
		"fallback": "solar:dumbbells-2-line-duotone",
	});
}

export default Component;
