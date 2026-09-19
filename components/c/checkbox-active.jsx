import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5sxvgbez.css';

const viewBox = {"width":27,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5sxvgbez"/>`,
		"fallback": "fontisto:checkbox-active",
	});
}

export default Component;
