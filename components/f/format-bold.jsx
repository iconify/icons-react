import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g08_ym8px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g08_ym8px"/>`,
		"fallback": "mdi-light:format-bold",
	});
}

export default Component;
