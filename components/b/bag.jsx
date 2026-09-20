import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jaq1c1b6k.css';
import '../../css/j/ja0ogbbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="jaq1c1b6k"/><path class="ja0ogbbwe"/></g>`,
		"fallback": "lets-icons:bag",
	});
}

export default Component;
