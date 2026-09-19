import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/furgsjbhc.css';
import '../../css/c/cn0c-05yi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="furgsjbhc"/><path class="cn0c-05yi"/>`,
		"fallback": "cil:chevron-double-right",
	});
}

export default Component;
