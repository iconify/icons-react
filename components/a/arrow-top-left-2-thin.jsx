import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu4uyrb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu4uyrb_f"/>`,
		"fallback": "iconamoon:arrow-top-left-2-thin",
	});
}

export default Component;
