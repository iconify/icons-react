import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yxz5rlbix.css';
import '../../css/b/b2wq-2kdm.css';
import '../../css/e/eetq4kbnf.css';
import '../../css/l/l-mb-_b9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yxz5rlbix"/><path class="b2wq-2kdm"/><path class="eetq4kbnf"/><path class="l-mb-_b9q"/></g>`,
		"fallback": "solar:bag-music-linear",
	});
}

export default Component;
