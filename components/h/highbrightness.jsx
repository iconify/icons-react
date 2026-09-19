import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjk7w0bmz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjk7w0bmz"/>`,
		"fallback": "fxemoji:highbrightness",
	});
}

export default Component;
