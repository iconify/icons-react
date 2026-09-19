import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqzfn4-ds.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqzfn4-ds"/>`,
		"fallback": "game-icons:dripping-star",
	});
}

export default Component;
