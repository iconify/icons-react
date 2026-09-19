import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9wvyeb-k.css';
import '../../css/j/jso3jy2en.css';
import '../../css/c/czglw1bjh.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9wvyeb-k"/><path class="jso3jy2en"/><path class="czglw1bjh"/>`,
		"fallback": "ant-design:file-word-twotone",
	});
}

export default Component;
