import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4acjnbxx.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4acjnbxx"/>`,
		"fallback": "f7:f-cursive-circle",
	});
}

export default Component;
