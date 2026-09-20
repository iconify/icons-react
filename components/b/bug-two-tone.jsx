import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xed5if1bo.css';
import '../../css/i/ikg_5ub0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xed5if1bo"/><path class="ikg_5ub0u"/></g>`,
		"fallback": "keyline-icons:bug-two-tone",
	});
}

export default Component;
