import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/q8u6mobfl.css';
import '../../css/a/ataxjxboq.css';
import '../../css/t/t6c61bbdh.css';
import '../../css/s/s8zaeubln.css';
import '../../css/c/c_-ouznwe.css';
import '../../css/y/y-xopybst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="q8u6mobfl wm-shadow"/><path class="ataxjxboq wm-shadow"/><path class="t6c61bbdh"/><path class="s8zaeubln"/><path class="c_-ouznwe"/><path class="wm-s y-xopybst"/></g>`,
		"fallback": "withicons-brutal:avatar-monster",
	});
}

export default Component;
