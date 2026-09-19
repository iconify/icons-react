import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klvyo3bdd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klvyo3bdd"/>`,
		"fallback": "ep:cellphone",
	});
}

export default Component;
