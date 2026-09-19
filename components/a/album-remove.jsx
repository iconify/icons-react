import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbw44eflg.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbw44eflg"/>`,
		"fallback": "fluent-mdl2:album-remove",
	});
}

export default Component;
