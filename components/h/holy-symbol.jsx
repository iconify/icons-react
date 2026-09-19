import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu56rwbvr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu56rwbvr"/>`,
		"fallback": "game-icons:holy-symbol",
	});
}

export default Component;
