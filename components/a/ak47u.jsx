import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh_kfwb3g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh_kfwb3g"/>`,
		"fallback": "game-icons:ak47u",
	});
}

export default Component;
