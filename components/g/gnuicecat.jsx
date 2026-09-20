import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8tq9wbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8tq9wbqi"/>`,
		"fallback": "simple-icons:gnuicecat",
	});
}

export default Component;
