import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j45eambkn.css';
import '../../css/t/tn5glfbqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j45eambkn"/><path class="tn5glfbqe"/></g>`,
		"fallback": "keyline-icons:git-pull-request-plus-duotone",
	});
}

export default Component;
