import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/abdm64bot.css';
import '../../css/h/h7xzrib4t.css';
import '../../css/a/arhdvhtkj.css';
import '../../css/b/b0yqitbma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="abdm64bot"/><path class="h7xzrib4t"/><path class="arhdvhtkj"/><path clip-rule="evenodd" class="b0yqitbma"/></g>`,
		"fallback": "solar:cat-outline",
	});
}

export default Component;
