import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/houilkbik.css';
import '../../css/h/h8mlz4ctj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="houilkbik"/><rect class="h8mlz4ctj"/>`,
		"fallback": "eva:clipboard-fill",
	});
}

export default Component;
