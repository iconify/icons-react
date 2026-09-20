import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3ra9bezo.css';
import '../../css/c/cw9m31tdc.css';
import '../../css/f/fd7qk3c9k.css';
import '../../css/y/yc5juqbqa.css';
import '../../css/j/jec384x6q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3ra9bezo"/><path class="cw9m31tdc"/><path class="fd7qk3c9k"/><path class="yc5juqbqa"/><path class="jec384x6q"/>`,
		"fallback": "selfhst:homescreen-hero",
	});
}

export default Component;
