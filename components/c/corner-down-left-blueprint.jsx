import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/c6e--ab3b.css';
import '../../css/e/e49usltee.css';
import '../../css/d/d8jrfxbex.css';
import '../../css/g/g37caurxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="c6e--ab3b wm-k"/><path class="e49usltee wm-a"/><path class="d8jrfxbex wm-k"/><path class="g37caurxe wm-a"/></g>`,
		"fallback": "withicons:corner-down-left-blueprint",
	});
}

export default Component;
