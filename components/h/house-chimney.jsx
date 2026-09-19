import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyesi4bel.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyesi4bel"/>`,
		"fallback": "fa6-solid:house-chimney",
	});
}

export default Component;
