import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8qfz9rzk.css';
import '../../css/u/u8dny2bmz.css';
import '../../css/o/oe2gxvaee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8qfz9rzk"/><path class="u8dny2bmz"/><path class="oe2gxvaee"/>`,
		"fallback": "streamline-ultimate:card-game-heart-bold",
	});
}

export default Component;
