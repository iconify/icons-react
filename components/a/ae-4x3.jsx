import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1xzrlbhy.css';
import '../../css/v/v18c9fbau.css';
import '../../css/r/r38kscbse.css';
import '../../css/j/jlqxt-bjp.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1xzrlbhy"/><path class="v18c9fbau"/><path class="r38kscbse"/><path class="jlqxt-bjp"/>`,
		"fallback": "flag:ae-4x3",
	});
}

export default Component;
