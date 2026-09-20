import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lenvu_jmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lenvu_jmr"/>`,
		"fallback": "token:cake",
	});
}

export default Component;
