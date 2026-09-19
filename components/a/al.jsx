import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s4pjuacnm.css';
import '../../css/s/sjr9l67ze.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s4pjuacnm"/><path class="sjr9l67ze"/></g>`,
		"fallback": "flagpack:al",
	});
}

export default Component;
