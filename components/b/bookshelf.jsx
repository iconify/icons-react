import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znj2yjbcg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znj2yjbcg"/>`,
		"fallback": "game-icons:bookshelf",
	});
}

export default Component;
