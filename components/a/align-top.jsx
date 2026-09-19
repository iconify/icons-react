import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ic2yh4byu.css';
import '../../css/z/z9_1rmjpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ic2yh4byu"/><path class="z9_1rmjpa"/></g>`,
		"fallback": "gg:align-top",
	});
}

export default Component;
