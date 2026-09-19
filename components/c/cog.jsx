import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n52r4v0cw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n52r4v0cw"/>`,
		"fallback": "game-icons:cog",
	});
}

export default Component;
