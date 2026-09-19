import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv_c7cbqq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv_c7cbqq"/>`,
		"fallback": "game-icons:distress-signal",
	});
}

export default Component;
