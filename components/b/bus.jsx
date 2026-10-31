import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bvz1iblsh.css';
import '../../css/v/v7ctcbb2q.css';
import '../../css/k/k2h3tsbhj.css';
import '../../css/d/dv-h2sbhb.css';
import '../../css/k/ku6c-5bvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="bvz1iblsh wm-shadow"/><path class="v7ctcbb2q wm-shadow"/><path class="k2h3tsbhj"/><path class="dv-h2sbhb"/><path class="ku6c-5bvi"/></g>`,
		"fallback": "withicons-brutal:bus",
	});
}

export default Component;
