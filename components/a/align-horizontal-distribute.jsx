import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esjtjicmi.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esjtjicmi"/>`,
		"fallback": "memory:align-horizontal-distribute",
	});
}

export default Component;
