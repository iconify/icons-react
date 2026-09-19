import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw33xtbeb.css';
import '../../css/u/uopwe8brh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw33xtbeb"/><path class="uopwe8brh"/>`,
		"fallback": "dashicons:businesswoman",
	});
}

export default Component;
