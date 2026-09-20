import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyos_vo5j.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyos_vo5j"/>`,
		"fallback": "oi:arrow-right",
	});
}

export default Component;
