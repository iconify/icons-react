import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gojvx1bdd.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gojvx1bdd"/>`,
		"fallback": "memory:box-light-vertical-menu-left",
	});
}

export default Component;
