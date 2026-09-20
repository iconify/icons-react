import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x8pf_69zz.css';
import '../../css/u/u8eu58vpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x8pf_69zz"/><path class="u8eu58vpd"/></g>`,
		"fallback": "lucide:hamburger",
	});
}

export default Component;
