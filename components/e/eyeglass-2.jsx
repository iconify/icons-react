import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xhx6o3bpd.css';
import '../../css/y/yzjnt3ajf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xhx6o3bpd"/><path class="yzjnt3ajf"/></g>`,
		"fallback": "tabler:eyeglass-2",
	});
}

export default Component;
