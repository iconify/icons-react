import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/buzh9rbpl.css';
import '../../css/e/e5ve43pll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="buzh9rbpl"/><path class="e5ve43pll"/></g>`,
		"fallback": "vadivam:file-signal",
	});
}

export default Component;
