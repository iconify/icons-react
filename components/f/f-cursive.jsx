import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1cdg_y4h.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1cdg_y4h"/>`,
		"fallback": "f7:f-cursive",
	});
}

export default Component;
