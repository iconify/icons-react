import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-wfxjb1n.css';
import '../../css/f/fajrh4bpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-wfxjb1n"/><path class="fajrh4bpc"/>`,
		"fallback": "boxicons:alarm-minus",
	});
}

export default Component;
