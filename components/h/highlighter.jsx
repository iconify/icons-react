import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_x77tb_x.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_x77tb_x"/>`,
		"fallback": "picon:highlighter",
	});
}

export default Component;
