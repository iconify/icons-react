import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kieygotrt.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kieygotrt"/>`,
		"fallback": "memory:box-outer-light-dashed-up-down-left",
	});
}

export default Component;
