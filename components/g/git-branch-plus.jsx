import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cpza59blp.css';
import '../../css/u/ufzy91bpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cpza59blp"/><path class="ufzy91bpu"/></g>`,
		"fallback": "vadivam:git-branch-plus",
	});
}

export default Component;
