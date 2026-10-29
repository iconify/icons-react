import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr25z3bhd.css';
import '../../css/d/d5cn6-g7r.css';
import '../../css/g/g0_j010xc.css';
import '../../css/t/tok5ds4az.css';
import '../../css/t/tkz0t1bdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr25z3bhd wm-shadow"/><path class="d5cn6-g7r wm-k"/><path class="g0_j010xc wm-k"/><path class="tok5ds4az wm-a"/><path class="tkz0t1bdz wm-a"/>`,
		"fallback": "withicons-pastel:chart-line",
	});
}

export default Component;
