import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye9hi3bxu.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye9hi3bxu"/>`,
		"fallback": "memory:alert-box-fill",
	});
}

export default Component;
