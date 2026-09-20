import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p40sy6z0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p40sy6z0u"/>`,
		"fallback": "reicon:circle-transfer-diag",
	});
}

export default Component;
