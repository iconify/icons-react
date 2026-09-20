import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnx3lyb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xnx3lyb5g"/>`,
		"fallback": "streamline-ultimate:bill-cross-bold",
	});
}

export default Component;
