import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qipb8obgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qipb8obgd"/>`,
		"fallback": "coolicons:credit-card-plus-corner-fill-round",
	});
}

export default Component;
