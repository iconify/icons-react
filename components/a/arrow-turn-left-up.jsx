import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3luf_dri.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3luf_dri"/>`,
		"fallback": "f7:arrow-turn-left-up",
	});
}

export default Component;
