import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/slmw7ib8v.css';
import '../../css/v/v9jq5md0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="slmw7ib8v"/><path class="v9jq5md0e"/></g>`,
		"fallback": "tabler:book-download",
	});
}

export default Component;
