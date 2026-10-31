import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1_uv1bzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1_uv1bzy"/>`,
		"fallback": "coolicons:cloud-lightning-round",
	});
}

export default Component;
