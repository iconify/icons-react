import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi2z2u4mn.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi2z2u4mn"/>`,
		"fallback": "memory:checker-large",
	});
}

export default Component;
