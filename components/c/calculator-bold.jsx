import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_jt8jbsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y_jt8jbsv"/>`,
		"fallback": "solar:calculator-bold",
	});
}

export default Component;
