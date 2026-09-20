import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z3kbpg3jy.css';
import '../../css/j/jrc5o1v2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z3kbpg3jy"/><rect class="jrc5o1v2l"/></g>`,
		"fallback": "lucide:hard-hat",
	});
}

export default Component;
