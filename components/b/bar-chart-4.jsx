import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp8r7mhcg.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp8r7mhcg"/>`,
		"fallback": "fluent-mdl2:bar-chart-4",
	});
}

export default Component;
