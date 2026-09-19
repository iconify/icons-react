import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfdi55bmn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfdi55bmn"/>`,
		"fallback": "f7:arrow-turn-right-up",
	});
}

export default Component;
