import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e_vniuz2r.css';
import '../../css/a/a048ssbll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e_vniuz2r"/><path class="a048ssbll"/></g>`,
		"fallback": "vadivam:git-branch-minus",
	});
}

export default Component;
