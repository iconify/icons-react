import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppq6b8bgm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppq6b8bgm"/>`,
		"fallback": "game-icons:empty-metal-bucket",
	});
}

export default Component;
