import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-_uw5b6g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-_uw5b6g"/>`,
		"fallback": "game-icons:crossed-axes",
	});
}

export default Component;
