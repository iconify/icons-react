import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/teq8_fbrn.css';
import '../../css/b/bzs4ysbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="teq8_fbrn"/><path class="bzs4ysbat"/></g>`,
		"fallback": "andrsrxn:folder-plus",
	});
}

export default Component;
