import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dywcxxb4c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dywcxxb4c"/>`,
		"fallback": "game-icons:dungeon-light",
	});
}

export default Component;
