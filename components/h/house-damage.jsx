import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq9dtbb4z.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq9dtbb4z"/>`,
		"fallback": "fa-solid:house-damage",
	});
}

export default Component;
