import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd2hwobky.css';
import '../../css/v/vh3o_db4k.css';
import '../../css/h/hhx3qrbhk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd2hwobky"/><path class="vh3o_db4k"/><path class="hhx3qrbhk"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-programming-browser-bugs-1",
	});
}

export default Component;
