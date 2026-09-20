import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yz4lvb0-v.css';
import '../../css/r/rhpsudj_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yz4lvb0-v"/><path class="rhpsudj_n"/></g>`,
		"fallback": "tabler:currency-shekel",
	});
}

export default Component;
