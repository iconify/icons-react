import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qays_7b-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qays_7b-t"/>`,
		"fallback": "coolicons:house-minus-fill-round",
	});
}

export default Component;
