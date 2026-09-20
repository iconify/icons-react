import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzt0lm2ue.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pzt0lm2ue"/>`,
		"fallback": "teenyicons:discount-solid",
	});
}

export default Component;
