import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nnzc6bu3w.css';
import '../../css/s/s3qgoqb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nnzc6bu3w"/><path class="s3qgoqb5n"/></g>`,
		"fallback": "coolicons:column-plus-duocolor-round",
	});
}

export default Component;
