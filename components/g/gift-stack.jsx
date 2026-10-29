import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/natiuwblb.css';
import '../../css/g/g6xqmd98j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="natiuwblb"/><path class="g6xqmd98j wm-a"/></g>`,
		"fallback": "withicons:gift-stack",
	});
}

export default Component;
