import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m5e1rhb4m.css';
import '../../css/n/nl5dv7buo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m5e1rhb4m"/><path class="nl5dv7buo"/></g>`,
		"fallback": "keyline-icons:git-commit-vertical-fill",
	});
}

export default Component;
