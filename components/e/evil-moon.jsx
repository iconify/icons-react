import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1iia1cmh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1iia1cmh"/>`,
		"fallback": "game-icons:evil-moon",
	});
}

export default Component;
