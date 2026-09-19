import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yhnpx4b2l.css';
import '../../css/s/s1ltn07vh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yhnpx4b2l"/><path class="s1ltn07vh"/></g>`,
		"fallback": "fluent-emoji-flat:eye-in-speech-bubble",
	});
}

export default Component;
