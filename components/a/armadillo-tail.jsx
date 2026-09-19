import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adwhckb0b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adwhckb0b"/>`,
		"fallback": "game-icons:armadillo-tail",
	});
}

export default Component;
