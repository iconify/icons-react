import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5pa8ub1j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j5pa8ub1j"/>`,
		"fallback": "streamline-flex:heart-rate-solid",
	});
}

export default Component;
