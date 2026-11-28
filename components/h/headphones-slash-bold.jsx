import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdef5ccna.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdef5ccna"/>`,
		"fallback": "pullo:headphones-slash-bold",
	});
}

export default Component;
