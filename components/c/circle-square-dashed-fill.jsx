import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b6uonebog.css';
import '../../css/l/l_j0jz7_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b6uonebog"/><path class="l_j0jz7_x"/></g>`,
		"fallback": "keyline-icons:circle-square-dashed-fill",
	});
}

export default Component;
