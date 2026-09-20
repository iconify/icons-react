import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz98gcbrj.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz98gcbrj"/>`,
		"fallback": "memory:box-outer-light-up-left-right",
	});
}

export default Component;
