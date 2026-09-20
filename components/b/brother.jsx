import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl30djqpt.css';
import '../../css/a/ad8qs5b0r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl30djqpt"/><path class="ad8qs5b0r"/>`,
		"fallback": "selfhst:brother",
	});
}

export default Component;
