import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/ja0rtindj.css';
import '../../css/r/r2_b8cbdy.css';
import '../../css/b/bfx0rej2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ja0rtindj"/><path class="r2_b8cbdy"/><path class="bfx0rej2j"/></g>`,
		"fallback": "si:eye-duotone",
	});
}

export default Component;
