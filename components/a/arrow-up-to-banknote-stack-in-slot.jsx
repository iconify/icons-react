import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqej7pdcn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqej7pdcn"/>`,
		"fallback": "pinhead:arrow-up-to-banknote-stack-in-slot",
	});
}

export default Component;
