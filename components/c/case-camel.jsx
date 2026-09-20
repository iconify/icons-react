import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kcvo76bvf.css';
import '../../css/l/l1_fkmqql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="kcvo76bvf"/><path class="l1_fkmqql"/></g>`,
		"fallback": "lucide-lab:case-camel",
	});
}

export default Component;
