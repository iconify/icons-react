import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g-hs3vbsc.css';
import '../../css/e/elyi5abmp.css';
import '../../css/t/t1okuubfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g-hs3vbsc"/><path class="elyi5abmp"/><path class="t1okuubfx"/></g>`,
		"fallback": "tdesign:book-unknown",
	});
}

export default Component;
