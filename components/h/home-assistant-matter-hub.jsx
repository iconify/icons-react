import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpif0vp-i.css';
import '../../css/v/vd05wq3fm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpif0vp-i"/><path class="vd05wq3fm"/>`,
		"fallback": "selfhst:home-assistant-matter-hub",
	});
}

export default Component;
