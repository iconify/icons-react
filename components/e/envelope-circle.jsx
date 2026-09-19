import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3312sc7m.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3312sc7m"/>`,
		"fallback": "f7:envelope-circle",
	});
}

export default Component;
