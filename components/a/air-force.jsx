import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5jtt9gnu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5jtt9gnu"/>`,
		"fallback": "game-icons:air-force",
	});
}

export default Component;
