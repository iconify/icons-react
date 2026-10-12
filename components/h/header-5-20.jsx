import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgcq7ab0y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgcq7ab0y"/>`,
		"fallback": "garden:header-5-20",
	});
}

export default Component;
