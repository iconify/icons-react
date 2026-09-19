import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzf2fwb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzf2fwb_h"/>`,
		"fallback": "ci:expand",
	});
}

export default Component;
