import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mziu1o0cs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mziu1o0cs"/>`,
		"fallback": "streamline:bicycle-bike-remix",
	});
}

export default Component;
