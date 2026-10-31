import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eedpgh6qa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eedpgh6qa"/>`,
		"fallback": "coolicons:file-minus-fill-round",
	});
}

export default Component;
