import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ikio23b7i.css';
import '../../css/m/mfbgkhbgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ikio23b7i"/><path class="mfbgkhbgh"/></g>`,
		"fallback": "keyline-icons:git-pull-request-closed-duotone",
	});
}

export default Component;
