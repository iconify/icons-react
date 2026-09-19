import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgm64nolf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgm64nolf"/>`,
		"fallback": "game-icons:android-mask",
	});
}

export default Component;
