import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c83uhb54j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c83uhb54j"/>`,
		"fallback": "lucide:credit-card-minus",
	});
}

export default Component;
