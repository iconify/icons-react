import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tiszw60om.css';
import '../../css/b/b5vq9obwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tiszw60om"/><path class="b5vq9obwi"/></g>`,
		"fallback": "streamline-freehand-color:crypto-currency-bitcoin-give",
	});
}

export default Component;
