import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4r25c7hy.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4r25c7hy"/>`,
		"fallback": "wi:forecast-io-partly-cloudy-night",
	});
}

export default Component;
