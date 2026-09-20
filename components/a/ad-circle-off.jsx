import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fkk4s5meg.css';
import '../../css/t/twwjyhknu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fkk4s5meg"/><path class="twwjyhknu"/></g>`,
		"fallback": "tabler:ad-circle-off",
	});
}

export default Component;
