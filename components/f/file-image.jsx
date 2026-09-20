import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kb5ad6bed.css';
import '../../css/r/rq1_9-wyk.css';
import '../../css/e/e5szhf2fj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kb5ad6bed"/><path class="rq1_9-wyk"/><path class="e5szhf2fj"/></g>`,
		"fallback": "vadivam:file-image",
	});
}

export default Component;
