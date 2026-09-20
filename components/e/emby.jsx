import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkv7bj1bg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkv7bj1bg"/>`,
		"fallback": "thesvg:emby",
	});
}

export default Component;
