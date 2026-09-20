import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjsj_ebfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjsj_ebfp"/>`,
		"fallback": "keyline-icons:chart-gantt",
	});
}

export default Component;
