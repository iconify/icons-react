import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v193nxbqb.css';
import '../../css/i/i7nedwk7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v193nxbqb"/><path class="i7nedwk7k"/></g>`,
		"fallback": "tabler:h-6",
	});
}

export default Component;
