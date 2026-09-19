import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/ntqqlf_wk.css';
import '../../css/m/m0bhoobwp.css';
import '../../css/l/lejiw1pae.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ntqqlf_wk"/><path class="m0bhoobwp"/><path class="lejiw1pae"/></g>`,
		"fallback": "pepicons:arrow-down-left",
	});
}

export default Component;
