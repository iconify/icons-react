import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts1854bqx.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts1854bqx"/>`,
		"fallback": "memory:calculator",
	});
}

export default Component;
