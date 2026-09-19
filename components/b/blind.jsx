import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux1cfnjeu.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux1cfnjeu"/>`,
		"fallback": "fa-solid:blind",
	});
}

export default Component;
