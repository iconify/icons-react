import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0nft--2b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0nft--2b"/>`,
		"fallback": "game-icons:caged-ball",
	});
}

export default Component;
