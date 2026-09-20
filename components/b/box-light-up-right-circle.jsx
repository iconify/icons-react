import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrc83gbvk.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrc83gbvk"/>`,
		"fallback": "memory:box-light-up-right-circle",
	});
}

export default Component;
