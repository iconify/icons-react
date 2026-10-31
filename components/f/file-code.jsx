import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/e/evj4arbgm.css';
import '../../css/t/tbgmglsbj.css';
import '../../css/s/sy1q37l5w.css';
import '../../css/c/cn5-cebmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="evj4arbgm"/><path class="tbgmglsbj"/><path class="sy1q37l5w"/><path class="cn5-cebmu"/></g>`,
		"fallback": "withicons-retro:file-code",
	});
}

export default Component;
