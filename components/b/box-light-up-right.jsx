import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uejwkwmst.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uejwkwmst"/>`,
		"fallback": "memory:box-light-up-right",
	});
}

export default Component;
