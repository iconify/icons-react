import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/np9zh6bil.css';
import '../../css/y/yypy0t5nz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="np9zh6bil"/><path class="yypy0t5nz"/></g>`,
		"fallback": "vadivam:cloud-backup",
	});
}

export default Component;
