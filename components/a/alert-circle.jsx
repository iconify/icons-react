import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goyprba4x.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goyprba4x"/>`,
		"fallback": "memory:alert-circle",
	});
}

export default Component;
