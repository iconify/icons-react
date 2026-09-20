import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msnpfob3l.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msnpfob3l"/>`,
		"fallback": "memory:box-light-vertical-right-stipple-right",
	});
}

export default Component;
