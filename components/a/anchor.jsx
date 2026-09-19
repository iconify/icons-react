import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8bp3obwr.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8bp3obwr"/>`,
		"fallback": "fa6-solid:anchor",
	});
}

export default Component;
