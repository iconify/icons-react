import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r42xl0rkz.css';
import '../../css/w/wwqvuwc3u.css';
import '../../css/a/ae677qkzp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r42xl0rkz"/><path class="wwqvuwc3u"/><path class="ae677qkzp"/>`,
		"fallback": "energy-icons:fire-extinguisher-48-bold",
	});
}

export default Component;
