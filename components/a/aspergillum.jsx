import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw69o2b-t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw69o2b-t"/>`,
		"fallback": "game-icons:aspergillum",
	});
}

export default Component;
