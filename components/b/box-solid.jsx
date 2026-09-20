import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frjvp-1mk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frjvp-1mk"/>`,
		"fallback": "teenyicons:box-solid",
	});
}

export default Component;
