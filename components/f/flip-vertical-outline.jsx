import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huh3he71t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huh3he71t"/>`,
		"fallback": "teenyicons:flip-vertical-outline",
	});
}

export default Component;
