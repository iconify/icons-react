import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w8v1bib2u.css';
import '../../css/z/zr6ygtopi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="w8v1bib2u"/><path class="zr6ygtopi"/></g>`,
		"fallback": "healthicons:cpap-machine-24px",
	});
}

export default Component;
