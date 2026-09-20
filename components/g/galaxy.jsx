import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/btre14esz.css';
import '../../css/v/vc24inwoj.css';
import '../../css/d/dftf9rvck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="btre14esz"/><path class="vc24inwoj"/><circle class="dftf9rvck"/></g>`,
		"fallback": "lucide:galaxy",
	});
}

export default Component;
