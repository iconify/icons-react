import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvv_3bcke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvv_3bcke"/>`,
		"fallback": "coolicons:arrow-down-right-small-duocolor-round",
	});
}

export default Component;
