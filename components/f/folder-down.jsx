import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/ti2k1_biq.css';
import '../../css/y/yi0d00o4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ti2k1_biq"/><path class="yi0d00o4v"/></g>`,
		"fallback": "vadivam:folder-down",
	});
}

export default Component;
