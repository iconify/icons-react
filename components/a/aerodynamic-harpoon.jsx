import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m26-4v_8b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m26-4v_8b"/>`,
		"fallback": "game-icons:aerodynamic-harpoon",
	});
}

export default Component;
