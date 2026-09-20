import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xylbu51th.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xylbu51th"/>`,
		"fallback": "pinhead:dharma-wheel",
	});
}

export default Component;
