import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/texu0db1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="texu0db1w"/>`,
		"fallback": "mdi:fruit-pineapple",
	});
}

export default Component;
