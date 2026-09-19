import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbu_57tmg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbu_57tmg"/>`,
		"fallback": "game-icons:hell-crosses",
	});
}

export default Component;
