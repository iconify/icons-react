import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdt54j63b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdt54j63b"/>`,
		"fallback": "selfhst:diyhue-dark",
	});
}

export default Component;
