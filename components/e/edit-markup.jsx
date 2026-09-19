import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkcsv_q9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nkcsv_q9x"/>`,
		"fallback": "gg:edit-markup",
	});
}

export default Component;
