import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b-32ldj2j.css';
import '../../css/n/n3snjnbyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b-32ldj2j"/><path class="n3snjnbyu"/></g>`,
		"fallback": "keyline-icons:brain-duotone",
	});
}

export default Component;
