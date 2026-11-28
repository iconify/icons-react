import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmnrd41ay.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rzkuf1b-n.css';
import '../../css/o/ogdrgdtct.css';
import '../../css/f/fp2gh7bfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmnrd41ay secondary"/><g class="dt0cm9dhy primary"><path class="rzkuf1b-n"/><path class="ogdrgdtct"/><path class="fp2gh7bfx"/></g>`,
		"fallback": "iconaut:foldable-book-duo",
	});
}

export default Component;
