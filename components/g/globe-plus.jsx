import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/phlrzt8zj.css';
import '../../css/u/udchr2bgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="phlrzt8zj"/><path class="udchr2bgz"/></g>`,
		"fallback": "lucide:globe-plus",
	});
}

export default Component;
