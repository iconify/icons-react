import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eref7llez.css';
import '../../css/b/bxv5csb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eref7llez"/><path class="bxv5csb_k"/>`,
		"fallback": "bxs:chevrons-right",
	});
}

export default Component;
