import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik8ucng6w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ik8ucng6w"/>`,
		"fallback": "streamline-block:basic-arrows-up-left-circle",
	});
}

export default Component;
