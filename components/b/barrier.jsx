import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbr5iv52a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbr5iv52a"/>`,
		"fallback": "game-icons:barrier",
	});
}

export default Component;
