import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ajlzracvz.css';
import '../../css/c/c55ag9btm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ajlzracvz"/><circle class="c55ag9btm"/></g>`,
		"fallback": "lucide:eighth-note",
	});
}

export default Component;
