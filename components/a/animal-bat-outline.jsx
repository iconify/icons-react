import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/icugcnb8z.css';
import '../../css/a/a_0qcoh5r.css';
import '../../css/u/uyir3ybrn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="icugcnb8z"/><path class="a_0qcoh5r"/><path class="uyir3ybrn"/></g>`,
		"fallback": "healthicons:animal-bat-outline",
	});
}

export default Component;
