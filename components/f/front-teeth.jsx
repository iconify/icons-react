import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg0dw4z7d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg0dw4z7d"/>`,
		"fallback": "game-icons:front-teeth",
	});
}

export default Component;
