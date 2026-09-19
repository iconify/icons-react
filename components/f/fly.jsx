import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nbpc8pf9p.css';
import '../../css/o/orktttgam.css';
import '../../css/m/m52jxccxu.css';
import '../../css/z/zrextw9xp.css';
import '../../css/j/jwvtjfhkq.css';
import '../../css/n/n8ounnbat.css';
import '../../css/y/yrjckcbut.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nbpc8pf9p"/><path class="orktttgam"/><path class="m52jxccxu"/><path class="zrextw9xp"/><path class="jwvtjfhkq"/><path class="n8ounnbat"/><path class="yrjckcbut"/></g>`,
		"fallback": "fluent-emoji-flat:fly",
	});
}

export default Component;
