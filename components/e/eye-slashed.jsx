import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rbuyvibmz.css';
import '../../css/v/vsnkt-j9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rbuyvibmz"/><path class="vsnkt-j9n"/></g>`,
		"fallback": "akar-icons:eye-slashed",
	});
}

export default Component;
