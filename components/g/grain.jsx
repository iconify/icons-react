import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/horf_2btv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="horf_2btv"/>`,
		"fallback": "game-icons:grain",
	});
}

export default Component;
