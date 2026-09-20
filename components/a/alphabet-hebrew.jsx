import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/quh6eaczi.css';
import '../../css/e/eqjqetbma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="quh6eaczi"/><path class="eqjqetbma"/></g>`,
		"fallback": "tabler:alphabet-hebrew",
	});
}

export default Component;
