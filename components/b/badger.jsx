import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waqhw0blv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waqhw0blv"/>`,
		"fallback": "game-icons:badger",
	});
}

export default Component;
