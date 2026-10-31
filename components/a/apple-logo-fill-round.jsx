import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnjpk8bom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnjpk8bom"/>`,
		"fallback": "coolicons:apple-logo-fill-round",
	});
}

export default Component;
