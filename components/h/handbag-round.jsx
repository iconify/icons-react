import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usd_jbcxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usd_jbcxt"/>`,
		"fallback": "coolicons:handbag-round",
	});
}

export default Component;
