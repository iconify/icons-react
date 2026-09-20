import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sv-50tbbc.css';
import '../../css/y/yng94t3fl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sv-50tbbc"/><path class="yng94t3fl"/></g>`,
		"fallback": "tabler:function-off",
	});
}

export default Component;
