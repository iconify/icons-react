import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wne1pacex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wne1pacex"/>`,
		"fallback": "lucide:clock-fading",
	});
}

export default Component;
