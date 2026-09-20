import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd93vnikl.css';
import '../../css/v/vnapcuj_q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd93vnikl"/><path class="vnapcuj_q"/>`,
		"fallback": "streamline-pixel:hand-dislike",
	});
}

export default Component;
