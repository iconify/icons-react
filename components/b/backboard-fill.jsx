import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p37ht_7fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p37ht_7fv"/>`,
		"fallback": "mingcute:backboard-fill",
	});
}

export default Component;
