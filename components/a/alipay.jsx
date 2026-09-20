import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evs8n1b2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evs8n1b2j"/>`,
		"fallback": "simple-icons:alipay",
	});
}

export default Component;
