import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o8ju6j94j.css';
import '../../css/o/ot2586tdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="o8ju6j94j"/><path class="ot2586tdr"/></g>`,
		"fallback": "stash:chevron-double-up-duotone",
	});
}

export default Component;
