import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dlm8elbdv.css';
import '../../css/i/iuzbj5b6k.css';
import '../../css/d/dftf9rvck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dlm8elbdv"/><path class="iuzbj5b6k"/><circle class="dftf9rvck"/></g>`,
		"fallback": "humbleicons:briefcase",
	});
}

export default Component;
