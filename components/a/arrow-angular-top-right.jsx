import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya8_7lb_t.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya8_7lb_t"/>`,
		"fallback": "lineicons:arrow-angular-top-right",
	});
}

export default Component;
