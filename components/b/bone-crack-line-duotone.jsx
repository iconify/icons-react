import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sr9yokbre.css';
import '../../css/l/l-d1m7_ft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sr9yokbre"/><path class="l-d1m7_ft"/></g>`,
		"fallback": "solar:bone-crack-line-duotone",
	});
}

export default Component;
