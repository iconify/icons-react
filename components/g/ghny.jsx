import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pary7iblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pary7iblg"/>`,
		"fallback": "token:ghny",
	});
}

export default Component;
