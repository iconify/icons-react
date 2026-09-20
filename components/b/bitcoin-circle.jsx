import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glvt67bak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="glvt67bak"/>`,
		"fallback": "majesticons:bitcoin-circle",
	});
}

export default Component;
