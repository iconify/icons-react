import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noh6rfbzq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noh6rfbzq"/>`,
		"fallback": "pinhead:cannon",
	});
}

export default Component;
