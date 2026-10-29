import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gibh68n7x.css';
import '../../css/s/s2uhgxbuo.css';
import '../../css/e/em4t9mizl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gibh68n7x"/><path class="s2uhgxbuo wm-a"/><path class="em4t9mizl"/></g>`,
		"fallback": "withicons:glass-water-duo",
	});
}

export default Component;
