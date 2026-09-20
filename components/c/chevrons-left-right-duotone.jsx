import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gbp5ycvai.css';
import '../../css/a/ah3kfl0kj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gbp5ycvai"/><path class="ah3kfl0kj"/></g>`,
		"fallback": "keyline-icons:chevrons-left-right-duotone",
	});
}

export default Component;
