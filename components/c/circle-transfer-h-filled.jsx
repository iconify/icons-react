import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb135jbqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zb135jbqx"/>`,
		"fallback": "reicon:circle-transfer-h-filled",
	});
}

export default Component;
