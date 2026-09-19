import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgs7xia1m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgs7xia1m"/>`,
		"fallback": "game-icons:conway-life-glider",
	});
}

export default Component;
