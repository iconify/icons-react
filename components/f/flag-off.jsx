import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t__fhvbow.css';
import '../../css/w/wmgmj3bwn.css';
import '../../css/f/f6hdhkjzk.css';
import '../../css/r/rzxg3ka6j.css';
import '../../css/t/thh19dbdv.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="t__fhvbow wm-shadow"/><path class="wmgmj3bwn"/><path class="f6hdhkjzk"/><path class="rzxg3ka6j"/><path class="thh19dbdv"/><path class="v0eyaibau wm-s"/></g>`,
		"fallback": "withicons-retro:flag-off",
	});
}

export default Component;
