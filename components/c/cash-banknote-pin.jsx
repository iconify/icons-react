import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oaovvsb9w.css';
import '../../css/d/dgx97y8eg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oaovvsb9w"/><path class="dgx97y8eg"/></g>`,
		"fallback": "tabler:cash-banknote-pin",
	});
}

export default Component;
