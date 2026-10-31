import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/er9lmqpyp.css';
import '../../css/x/x0h6ncj5k.css';
import '../../css/o/o9xcesbno.css';
import '../../css/l/lb5z5tb2v.css';
import '../../css/b/bmlr6ob0i.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="er9lmqpyp"/><path class="x0h6ncj5k"/><path class="o9xcesbno wm-shine"/><path class="lb5z5tb2v wm-k"/><path class="bmlr6ob0i wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:flame",
	});
}

export default Component;
