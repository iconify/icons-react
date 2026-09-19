import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9mu7dbfc.css';

const viewBox = {"width":488,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9mu7dbfc"/>`,
		"fallback": "ps:flag-corner",
	});
}

export default Component;
