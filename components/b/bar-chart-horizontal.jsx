import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_6nx47vn.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_6nx47vn"/>`,
		"fallback": "fluent-mdl2:bar-chart-horizontal",
	});
}

export default Component;
