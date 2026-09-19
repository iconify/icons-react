import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq-azk5il.css';
import '../../css/z/zu7-jfbfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq-azk5il"/><path class="zu7-jfbfz"/>`,
		"fallback": "bxl:django",
	});
}

export default Component;
