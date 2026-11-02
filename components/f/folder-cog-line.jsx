import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmsxzccpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmsxzccpy"/>`,
		"fallback": "mingcute:folder-cog-line",
	});
}

export default Component;
