import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kunhnfbwj.css';
import '../../css/k/k-5cbg9fe.css';
import '../../css/k/kefqzgbrr.css';
import '../../css/n/npbwhkbqr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="kunhnfbwj"/><path class="k-5cbg9fe"/><path class="kefqzgbrr"/><path class="npbwhkbqr"/></g>`,
		"fallback": "streamline-plump-color:flashlight",
	});
}

export default Component;
