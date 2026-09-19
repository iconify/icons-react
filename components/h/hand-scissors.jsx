import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp-_iwjua.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp-_iwjua"/>`,
		"fallback": "fa6-regular:hand-scissors",
	});
}

export default Component;
