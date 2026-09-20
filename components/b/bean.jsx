import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tfuztib6u.css';
import '../../css/p/p8tll5byp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tfuztib6u"/><path class="p8tll5byp"/></g>`,
		"fallback": "lucide:bean",
	});
}

export default Component;
