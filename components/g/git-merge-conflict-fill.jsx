import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lj-uotwfq.css';
import '../../css/c/c5jj8mbot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lj-uotwfq"/><path class="c5jj8mbot"/></g>`,
		"fallback": "keyline-icons:git-merge-conflict-fill",
	});
}

export default Component;
