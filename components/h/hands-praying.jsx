import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwp-cymvv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwp-cymvv"/>`,
		"fallback": "fa7-solid:hands-praying",
	});
}

export default Component;
