import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjz7p6x4j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjz7p6x4j"/>`,
		"fallback": "energy-icons:couple-20",
	});
}

export default Component;
