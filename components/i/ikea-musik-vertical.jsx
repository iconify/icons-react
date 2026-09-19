import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dob6lsbxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dob6lsbxz"/>`,
		"fallback": "cbi:ikea-musik-vertical",
	});
}

export default Component;
