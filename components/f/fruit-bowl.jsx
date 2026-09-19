import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxbnzgbgt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxbnzgbgt"/>`,
		"fallback": "game-icons:fruit-bowl",
	});
}

export default Component;
