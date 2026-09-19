import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xti4taclw.css';
import '../../css/p/pr5hkx2sg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xti4taclw"/><path class="pr5hkx2sg"/>`,
		"fallback": "bxl:c-sharp",
	});
}

export default Component;
