import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r2ttem38m.css';
import '../../css/e/ejsp1wp8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r2ttem38m"/><path class="ejsp1wp8s"/></g>`,
		"fallback": "keyline-icons:git-merge-fill",
	});
}

export default Component;
