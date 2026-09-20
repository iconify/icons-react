import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/b/bpx-n0b8v.css';
import '../../css/o/obtqwbbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="bpx-n0b8v"/><path class="obtqwbbvb"/></g>`,
		"fallback": "streamline-logos:adobe-xd-logo",
	});
}

export default Component;
