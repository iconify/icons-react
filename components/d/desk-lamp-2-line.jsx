import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6d1tt4vm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6d1tt4vm"/>`,
		"fallback": "mingcute:desk-lamp-2-line",
	});
}

export default Component;
