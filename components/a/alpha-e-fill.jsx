import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqg489bcg.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqg489bcg"/>`,
		"fallback": "memory:alpha-e-fill",
	});
}

export default Component;
