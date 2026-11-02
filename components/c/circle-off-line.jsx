import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsl-0tizg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsl-0tizg"/>`,
		"fallback": "mingcute:circle-off-line",
	});
}

export default Component;
