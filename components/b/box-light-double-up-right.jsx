import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_uatck6d.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_uatck6d"/>`,
		"fallback": "memory:box-light-double-up-right",
	});
}

export default Component;
