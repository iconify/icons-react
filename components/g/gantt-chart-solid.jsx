import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at_qv4_-d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="at_qv4_-d"/>`,
		"fallback": "teenyicons:gantt-chart-solid",
	});
}

export default Component;
