import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgobqvysn.css';
import '../../css/f/fzc4cyr3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgobqvysn"/><path class="fzc4cyr3l"/>`,
		"fallback": "eos-icons:api-outlined",
	});
}

export default Component;
