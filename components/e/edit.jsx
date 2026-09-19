import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klzv45b1f.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klzv45b1f"/>`,
		"fallback": "zmdi:edit",
	});
}

export default Component;
