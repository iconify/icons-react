import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0sizfbbg.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0sizfbbg"/>`,
		"fallback": "fa-solid:bacon",
	});
}

export default Component;
