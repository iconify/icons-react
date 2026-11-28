import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm9larbcx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ebyo9fyqg.css';
import '../../css/j/j4pzf9bzr.css';
import '../../css/r/r39x_21mf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm9larbcx secondary"/><g class="dt0cm9dhy primary"><path class="ebyo9fyqg"/><path class="j4pzf9bzr"/><path class="r39x_21mf"/></g>`,
		"fallback": "iconaut:blocks-duo",
	});
}

export default Component;
