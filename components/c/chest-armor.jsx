import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1uf30h9p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1uf30h9p"/>`,
		"fallback": "game-icons:chest-armor",
	});
}

export default Component;
