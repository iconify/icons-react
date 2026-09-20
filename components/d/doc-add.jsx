import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z22pcbcyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z22pcbcyd"/>`,
		"fallback": "reicon:doc-add",
	});
}

export default Component;
