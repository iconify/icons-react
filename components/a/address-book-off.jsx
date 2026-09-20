import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w2l8boi6w.css';
import '../../css/m/m34m27bim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w2l8boi6w"/><path class="m34m27bim"/></g>`,
		"fallback": "tabler:address-book-off",
	});
}

export default Component;
