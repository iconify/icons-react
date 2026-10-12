import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8swt4bxg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8swt4bxg"/>`,
		"fallback": "garden:gear-fill-20",
	});
}

export default Component;
