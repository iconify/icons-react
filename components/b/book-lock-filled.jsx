import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/voy61jbve.css';
import '../../css/k/k4_ihpbqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="voy61jbve"/><path class="k4_ihpbqg"/></g>`,
		"fallback": "lucide-extended:book-lock-filled",
	});
}

export default Component;
