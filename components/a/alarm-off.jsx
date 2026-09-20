import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j2cyy0_7f.css';
import '../../css/a/as4o6itmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j2cyy0_7f"/><path class="as4o6itmr"/></g>`,
		"fallback": "tabler:alarm-off",
	});
}

export default Component;
