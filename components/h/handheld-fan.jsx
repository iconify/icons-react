import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzobbd9rt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzobbd9rt"/>`,
		"fallback": "game-icons:handheld-fan",
	});
}

export default Component;
