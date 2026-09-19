import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijg5zh-jo.css';
import '../../css/w/wqbkv8u2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijg5zh-jo"/><path class="wqbkv8u2i"/>`,
		"fallback": "bx:caret-up-circle",
	});
}

export default Component;
