import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zql7dlb8m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zql7dlb8m"/>`,
		"fallback": "game-icons:barbed-wire",
	});
}

export default Component;
