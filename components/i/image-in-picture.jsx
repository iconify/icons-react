import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/asrm77udx.css';
import '../../css/n/n94zpo43s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="asrm77udx"/><path class="n94zpo43s"/></g>`,
		"fallback": "tabler:image-in-picture",
	});
}

export default Component;
