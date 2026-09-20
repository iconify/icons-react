import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d8idb4bxx.css';
import '../../css/y/yyxm9kxcg.css';
import '../../css/u/ul3j-ojyj.css';
import '../../css/j/jzgvrpb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d8idb4bxx"/><path class="yyxm9kxcg"/><path class="ul3j-ojyj"/><path class="jzgvrpb_b"/></g>`,
		"fallback": "tdesign:git-repository",
	});
}

export default Component;
