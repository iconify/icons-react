import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sleoyfbzy.css';
import '../../css/v/vrf9bubqf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sleoyfbzy"/><path clip-rule="evenodd" class="vrf9bubqf"/></g>`,
		"fallback": "heroicons:archive-box-arrow-down-16-solid",
	});
}

export default Component;
