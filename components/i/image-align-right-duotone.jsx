import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xsknaqxum.css';
import '../../css/n/npt7x6baw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary xsknaqxum"/><path class="npt7x6baw primary"/></g>`,
		"fallback": "iconaut:image-align-right-duotone",
	});
}

export default Component;
