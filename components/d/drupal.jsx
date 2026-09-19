import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf5_0tv0y.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf5_0tv0y"/>`,
		"fallback": "fa-brands:drupal",
	});
}

export default Component;
