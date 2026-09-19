import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a18h3goli.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a18h3goli"/>`,
		"fallback": "fa6-solid:battery-half",
	});
}

export default Component;
