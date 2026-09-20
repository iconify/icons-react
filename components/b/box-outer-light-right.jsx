import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh2n0hprc.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh2n0hprc"/>`,
		"fallback": "memory:box-outer-light-right",
	});
}

export default Component;
