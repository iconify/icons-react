import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/o/ojk58ub1b.css';
import '../../css/j/j697l3uzc.css';
import '../../css/s/syho5phjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="ojk58ub1b"/><path class="j697l3uzc"/><path class="syho5phjn"/></g>`,
		"fallback": "streamline-logos:iconmoon-logo",
	});
}

export default Component;
