import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/t/tag940w2q.css';
import '../../css/n/n9542da1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="tag940w2q"/><path class="n9542da1w"/></g>`,
		"fallback": "lets-icons:bug-fill",
	});
}

export default Component;
