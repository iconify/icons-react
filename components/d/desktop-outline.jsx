import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlxpj_2iq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qlxpj_2iq"/>`,
		"fallback": "basil:desktop-outline",
	});
}

export default Component;
