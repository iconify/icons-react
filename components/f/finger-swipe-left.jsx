import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcf2g90wf.css';
import '../../css/g/gmsn-19xf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcf2g90wf"/><path class="gmsn-19xf"/>`,
		"fallback": "boxicons:finger-swipe-left",
	});
}

export default Component;
