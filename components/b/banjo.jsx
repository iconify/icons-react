import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn9agurgv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn9agurgv"/>`,
		"fallback": "game-icons:banjo",
	});
}

export default Component;
