import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g1rmqcb6r.css';
import '../../css/o/o-aolgbja.css';
import '../../css/o/om6-cnkwr.css';
import '../../css/i/i6pwf4bws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="g1rmqcb6r wm-shadow"/><path class="o-aolgbja"/><path class="om6-cnkwr"/><path class="i6pwf4bws"/></g>`,
		"fallback": "withicons-retro:git-branch",
	});
}

export default Component;
