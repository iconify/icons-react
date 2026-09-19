import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hqkoarbqi.css';
import '../../css/j/jjkorcznt.css';
import '../../css/b/b8i7bfbtp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hqkoarbqi"/><path clip-rule="evenodd" class="jjkorcznt"/><path class="b8i7bfbtp"/></g>`,
		"fallback": "fluent-emoji-flat:heart-hands-medium-dark",
	});
}

export default Component;
