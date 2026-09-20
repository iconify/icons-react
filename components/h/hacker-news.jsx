import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a42oku2cl.css';
import '../../css/y/ytr1p0b3u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a42oku2cl"/><path class="ytr1p0b3u"/>`,
		"fallback": "selfhst:hacker-news",
	});
}

export default Component;
