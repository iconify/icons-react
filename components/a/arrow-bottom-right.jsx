import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atb0_abao.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atb0_abao"/>`,
		"fallback": "memory:arrow-bottom-right",
	});
}

export default Component;
