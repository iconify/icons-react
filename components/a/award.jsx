import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v9sqv7bfp.css';
import '../../css/i/iclri0b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v9sqv7bfp"/><path class="iclri0b-k"/></g>`,
		"fallback": "vadivam:award",
	});
}

export default Component;
