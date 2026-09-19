import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf62d2b6w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf62d2b6w"/>`,
		"fallback": "game-icons:bubble-field",
	});
}

export default Component;
