import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz5v9-vqq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz5v9-vqq"/>`,
		"fallback": "game-icons:flaming-arrow",
	});
}

export default Component;
