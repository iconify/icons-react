import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qx3xlwd4u.css';
import '../../css/a/a96k7rbus.css';
import '../../css/x/xsz6yoa7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="qx3xlwd4u"/><circle class="a96k7rbus"/><path class="xsz6yoa7e"/></g>`,
		"fallback": "iconamoon:category",
	});
}

export default Component;
