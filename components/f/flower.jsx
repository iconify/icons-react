import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nd0bsgb1r.css';
import '../../css/r/rt8jnzbtr.css';
import '../../css/j/jr8ljqwec.css';
import '../../css/v/vtppf7lnt.css';
import '../../css/b/b8u37vbar.css';
import '../../css/w/w5xwq3_4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="nd0bsgb1r wm-shadow"/><path class="rt8jnzbtr"/><path class="jr8ljqwec"/><path class="vtppf7lnt"/><path class="b8u37vbar wm-shine"/><path class="w5xwq3_4k wm-deco"/></g>`,
		"fallback": "withicons-sticker:flower",
	});
}

export default Component;
