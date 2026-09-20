import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/og_9js9al.css';
import '../../css/u/ugw1omula.css';
import '../../css/r/rh36-b77g.css';
import '../../css/d/dfxq8e26p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="og_9js9al"/><circle class="ugw1omula"/><circle class="rh36-b77g"/><path class="dfxq8e26p"/></g>`,
		"fallback": "meteor-icons:git-fork",
	});
}

export default Component;
