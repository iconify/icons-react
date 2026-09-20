import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqq0ivbzo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqq0ivbzo"/>`,
		"fallback": "teenyicons:float-center-solid",
	});
}

export default Component;
