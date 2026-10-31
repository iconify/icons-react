import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/udodwybqy.css';
import '../../css/g/gm8t2gz6r.css';
import '../../css/d/dasuh-jyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="udodwybqy wm-k"/><path class="gm8t2gz6r wm-a"/><path class="dasuh-jyt wm-s"/></g>`,
		"fallback": "withicons:flip-horizontal-gloss",
	});
}

export default Component;
