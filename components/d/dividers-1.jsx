import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/snp3hsbqv.css';
import '../../css/p/p73w8rbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="snp3hsbqv"/><path class="p73w8rbzc"/></g>`,
		"fallback": "tdesign:dividers-1",
	});
}

export default Component;
