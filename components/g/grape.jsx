import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/w9rkhebuc.css';
import '../../css/m/mg70k78il.css';
import '../../css/l/lhyb3bbbn.css';
import '../../css/x/x2f5ebbeb.css';
import '../../css/p/pfiv80a5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="w9rkhebuc"/><path class="mg70k78il wm-shine"/><path class="lhyb3bbbn wm-k"/><path class="wm-a x2f5ebbeb"/><path class="pfiv80a5u wm-deco"/></g>`,
		"fallback": "withicons-kawaii:grape",
	});
}

export default Component;
