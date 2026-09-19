import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x5v4j6bml.css';
import '../../css/f/f2j07rb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x5v4j6bml"/><path class="f2j07rb5c"/></g>`,
		"fallback": "healthicons:deaf-24px",
	});
}

export default Component;
