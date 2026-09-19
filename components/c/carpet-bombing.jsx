import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppqasevwz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppqasevwz"/>`,
		"fallback": "game-icons:carpet-bombing",
	});
}

export default Component;
