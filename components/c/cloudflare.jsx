import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptedp6bhh.css';
import '../../css/x/xat9ymb7w.css';
import '../../css/t/thrb5hbfs.css';

const viewBox = {"width":256,"height":116};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptedp6bhh"/><path class="xat9ymb7w"/><path class="thrb5hbfs"/>`,
		"fallback": "thesvg-color:cloudflare",
	});
}

export default Component;
