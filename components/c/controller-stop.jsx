import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5_k6bbph.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5_k6bbph"/>`,
		"fallback": "entypo:controller-stop",
	});
}

export default Component;
