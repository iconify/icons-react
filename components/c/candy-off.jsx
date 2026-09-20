import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tn-e949se.css';
import '../../css/c/cqtzmobsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tn-e949se"/><path class="cqtzmobsa"/></g>`,
		"fallback": "lucide:candy-off",
	});
}

export default Component;
