import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/ba-m1zbsy.css';
import '../../css/a/abm6f4rlm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ba-m1zbsy"/><path class="abm6f4rlm"/></g>`,
		"fallback": "lucide-extended:baggage-claim-filled",
	});
}

export default Component;
