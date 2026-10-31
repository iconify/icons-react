import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b9-v7ebor.css';
import '../../css/r/r6cqz_y8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="b9-v7ebor wm-k"/><path class="r6cqz_y8w wm-a"/></g>`,
		"fallback": "withicons:black-cat-gloss",
	});
}

export default Component;
