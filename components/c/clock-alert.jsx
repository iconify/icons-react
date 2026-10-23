import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yjsl-2b0j.css';
import '../../css/e/e2zbkmb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yjsl-2b0j"/><path class="e2zbkmb9j"/></g>`,
		"fallback": "vadivam:clock-alert",
	});
}

export default Component;
