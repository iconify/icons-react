import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcv99i1_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcv99i1_c"/>`,
		"fallback": "majesticons:chats-line",
	});
}

export default Component;
