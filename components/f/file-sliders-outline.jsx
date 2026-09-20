import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/egz7py4rh.css';
import '../../css/s/s9_vdtbdj.css';
import '../../css/c/cnnjisezc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="egz7py4rh"/><path class="s9_vdtbdj"/><path class="cnnjisezc"/></g>`,
		"fallback": "solar:file-sliders-outline",
	});
}

export default Component;
