import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o62-fkvhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o62-fkvhh"/>`,
		"fallback": "vadivam:bluetooth-off",
	});
}

export default Component;
