import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z80-l5b-j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z80-l5b-j"/>`,
		"fallback": "bi:airplane-engines-fill",
	});
}

export default Component;
