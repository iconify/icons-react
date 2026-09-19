import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pip0-acml.css';
import '../../css/s/s8_aazipl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pip0-acml"/><path class="s8_aazipl"/></g>`,
		"fallback": "bitcoin-icons:arrow-left-filled",
	});
}

export default Component;
