import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9f5bpedd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9f5bpedd"/>`,
		"fallback": "mingcute:close-circle-fill",
	});
}

export default Component;
