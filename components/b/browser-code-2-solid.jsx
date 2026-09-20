import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w39cyh2fh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w39cyh2fh"/>`,
		"fallback": "streamline-sharp:browser-code-2-solid",
	});
}

export default Component;
