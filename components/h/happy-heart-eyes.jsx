import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp7g7fret.css';
import '../../css/b/bwibdw4bb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp7g7fret"/><path class="bwibdw4bb"/>`,
		"fallback": "boxicons:happy-heart-eyes",
	});
}

export default Component;
