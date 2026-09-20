import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6sxug.css';
import '../../css/i/iw1iew.css';
import '../../css/r/r3cp3p.css';
import '../../css/s/so-to-14.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6sxug iw1iew"/><path class="iw1iew r3cp3p"/>`,
		"fallback": "line-md:confirm-square-twotone-to-square-twotone-transition",
	});
}

export default Component;
