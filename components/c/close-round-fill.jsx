import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbk_2kbbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cbk_2kbbq"/>`,
		"fallback": "lets-icons:close-round-fill",
	});
}

export default Component;
