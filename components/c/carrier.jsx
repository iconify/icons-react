import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4vudk69o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4vudk69o"/>`,
		"fallback": "game-icons:carrier",
	});
}

export default Component;
