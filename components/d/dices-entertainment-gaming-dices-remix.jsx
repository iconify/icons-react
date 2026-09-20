import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2c-uxbdb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t2c-uxbdb"/>`,
		"fallback": "streamline:dices-entertainment-gaming-dices-remix",
	});
}

export default Component;
