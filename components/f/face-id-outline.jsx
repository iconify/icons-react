import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjwu3kbww.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjwu3kbww"/>`,
		"fallback": "teenyicons:face-id-outline",
	});
}

export default Component;
