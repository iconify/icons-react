import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edesw8bbn.css';
import '../../css/p/p7k_3ybxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edesw8bbn"/><path class="p7k_3ybxd"/>`,
		"fallback": "boxicons:arrow-out-right-stroke-circle-half-filled",
	});
}

export default Component;
