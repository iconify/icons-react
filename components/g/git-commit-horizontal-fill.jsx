import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vj41ir4dn.css';
import '../../css/n/nl5dv7buo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vj41ir4dn"/><path class="nl5dv7buo"/></g>`,
		"fallback": "keyline-icons:git-commit-horizontal-fill",
	});
}

export default Component;
