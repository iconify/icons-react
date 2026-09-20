import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj-v6nbhg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cj-v6nbhg"/>`,
		"fallback": "streamline:factorial-remix",
	});
}

export default Component;
