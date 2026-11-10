import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oucxqmllt.css';
import '../../css/c/cemhlx37b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oucxqmllt"/><path class="cemhlx37b"/></g>`,
		"fallback": "tabler:git-merge-queue",
	});
}

export default Component;
