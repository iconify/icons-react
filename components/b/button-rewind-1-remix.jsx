import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_jaie2ue.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k_jaie2ue"/>`,
		"fallback": "streamline:button-rewind-1-remix",
	});
}

export default Component;
