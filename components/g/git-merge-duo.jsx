import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h0z33lbii.css';
import '../../css/v/v9c3zo18p.css';
import '../../css/f/f0kck1bsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="h0z33lbii"/><path class="v9c3zo18p"/><path class="f0kck1bsx"/></g>`,
		"fallback": "withicons:git-merge-duo",
	});
}

export default Component;
