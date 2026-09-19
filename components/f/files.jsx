import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb2q6ibgk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb2q6ibgk"/>`,
		"fallback": "game-icons:files",
	});
}

export default Component;
