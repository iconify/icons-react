import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hez26r3iq.css';
import '../../css/e/eqj1dy7lo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hez26r3iq"/><path class="eqj1dy7lo"/></g>`,
		"fallback": "stash:chevron-double-left-duotone",
	});
}

export default Component;
