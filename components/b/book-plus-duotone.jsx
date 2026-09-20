import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y39zg50mf.css';
import '../../css/b/bhxsj1kip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y39zg50mf"/><path class="bhxsj1kip"/></g>`,
		"fallback": "keyline-icons:book-plus-duotone",
	});
}

export default Component;
