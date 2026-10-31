import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/r9-8dsuvr.css';
import '../../css/t/todu1fbkz.css';
import '../../css/f/fn0sgebgx.css';
import '../../css/r/rew3kkb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="r9-8dsuvr wm-shadow"/><path class="todu1fbkz wm-shadow"/><path class="fn0sgebgx"/><path class="rew3kkb8m"/></g>`,
		"fallback": "withicons-brutal:black-cat",
	});
}

export default Component;
