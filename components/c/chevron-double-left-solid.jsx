import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o6t-036dd.css';
import '../../css/i/id4ng9ber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="o6t-036dd"/><path class="id4ng9ber"/></g>`,
		"fallback": "stash:chevron-double-left-solid",
	});
}

export default Component;
