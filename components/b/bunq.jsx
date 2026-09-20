import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thygd8drw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thygd8drw"/>`,
		"fallback": "thesvg-color:bunq",
	});
}

export default Component;
