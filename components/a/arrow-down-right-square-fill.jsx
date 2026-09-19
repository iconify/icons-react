import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hutf_8bot.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hutf_8bot"/>`,
		"fallback": "f7:arrow-down-right-square-fill",
	});
}

export default Component;
