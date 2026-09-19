import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppv_c6bdd.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppv_c6bdd"/>`,
		"fallback": "fa6-solid:building-lock",
	});
}

export default Component;
