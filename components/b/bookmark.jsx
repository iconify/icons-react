import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct12hn0tg.css';
import '../../css/i/im4c1bc7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct12hn0tg duoicon-secondary-layer"/><path class="duoicon-primary-layer im4c1bc7u"/>`,
		"fallback": "duo-icons:bookmark",
	});
}

export default Component;
