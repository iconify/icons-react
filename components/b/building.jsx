import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ar2nxm40s.css';
import '../../css/j/ji-bcsbjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ar2nxm40s"/><path class="ji-bcsbjd"/></g>`,
		"fallback": "vadivam:building",
	});
}

export default Component;
