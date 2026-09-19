import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b35t7ivdn.css';
import '../../css/a/a3u8wvb3i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b35t7ivdn"/><path class="a3u8wvb3i"/>`,
		"fallback": "fxemoji:dizzy",
	});
}

export default Component;
