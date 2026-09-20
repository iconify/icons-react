import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/ggrpqy6eh.css';
import '../../css/e/e82gl2bak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ggrpqy6eh"/><path class="e82gl2bak"/></g>`,
		"fallback": "keyline-icons:git-merge-two-tone",
	});
}

export default Component;
