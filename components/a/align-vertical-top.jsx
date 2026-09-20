import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uduo2dspc.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uduo2dspc"/>`,
		"fallback": "memory:align-vertical-top",
	});
}

export default Component;
