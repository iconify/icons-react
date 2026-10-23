import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/ppywy96-m.css';
import '../../css/q/qb2bunvmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ppywy96-m"/><path class="qb2bunvmv"/></g>`,
		"fallback": "vadivam:folder-lock",
	});
}

export default Component;
