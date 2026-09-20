import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ro-u72v3u.css';
import '../../css/a/anf3lubnz.css';
import '../../css/p/p25lb7btx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ro-u72v3u"/><path class="anf3lubnz"/><path class="p25lb7btx"/></g>`,
		"fallback": "streamline-flex-color:balloon",
	});
}

export default Component;
