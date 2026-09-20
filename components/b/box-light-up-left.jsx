import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyi5-4gvz.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyi5-4gvz"/>`,
		"fallback": "memory:box-light-up-left",
	});
}

export default Component;
