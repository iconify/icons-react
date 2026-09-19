import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyu36cbrc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyu36cbrc"/>`,
		"fallback": "game-icons:greek-sphinx",
	});
}

export default Component;
