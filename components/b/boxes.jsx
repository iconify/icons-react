import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/u/u-cs5mb0i.css';
import '../../css/t/tp91n5bnq.css';
import '../../css/s/sktwvmp9z.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="u-cs5mb0i"/><path class="tp91n5bnq wm-k"/><path class="sktwvmp9z wm-a"/><path class="i49wp7b0m wm-deco"/></g>`,
		"fallback": "withicons-kawaii:boxes",
	});
}

export default Component;
