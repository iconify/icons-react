import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiz3a5bdg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fiz3a5bdg"/>`,
		"fallback": "uiw:firefox",
	});
}

export default Component;
