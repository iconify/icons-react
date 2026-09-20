import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g1gk35bhy.css';
import '../../css/f/f67lgjpzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g1gk35bhy"/><path class="f67lgjpzz"/></g>`,
		"fallback": "tabler:home-bolt",
	});
}

export default Component;
