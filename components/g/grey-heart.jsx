import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/id-mrubfu.css';
import '../../css/f/f-moxybke.css';
import '../../css/m/m-jkwl5tc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="id-mrubfu"/><path class="f-moxybke"/><ellipse transform="rotate(30 23.477 12.592)" class="m-jkwl5tc"/></g>`,
		"fallback": "fluent-emoji-flat:grey-heart",
	});
}

export default Component;
