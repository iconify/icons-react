import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i-3kabbtf.css';
import '../../css/o/oqr6qu5qa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i-3kabbtf"/><path class="oqr6qu5qa"/></g>`,
		"fallback": "tabler:eye-flame",
	});
}

export default Component;
