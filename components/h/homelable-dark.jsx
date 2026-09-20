import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fssu8fvgl.css';
import '../../css/k/kp6gabvbt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fssu8fvgl"/><path class="kp6gabvbt"/>`,
		"fallback": "selfhst:homelable-dark",
	});
}

export default Component;
