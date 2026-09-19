import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u-ylrjucc.css';
import '../../css/s/slghhtbkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="u-ylrjucc"/><path class="slghhtbkz"/></g>`,
		"fallback": "akar-icons:briefcase",
	});
}

export default Component;
