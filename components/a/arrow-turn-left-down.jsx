import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fro1igbii.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fro1igbii"/>`,
		"fallback": "f7:arrow-turn-left-down",
	});
}

export default Component;
