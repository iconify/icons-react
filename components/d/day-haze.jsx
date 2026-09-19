import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8iec2qwe.css';

const viewBox = {"width":27,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8iec2qwe"/>`,
		"fallback": "fontisto:day-haze",
	});
}

export default Component;
