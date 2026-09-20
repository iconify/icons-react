import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8ywu5bta.css';
import '../../css/s/s776ws_jb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8ywu5bta"/><path clip-rule="evenodd" class="s776ws_jb"/>`,
		"fallback": "si:bus-fill",
	});
}

export default Component;
