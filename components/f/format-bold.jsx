import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdlpnnk8a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdlpnnk8a"/>`,
		"fallback": "zondicons:format-bold",
	});
}

export default Component;
