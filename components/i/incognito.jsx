import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/v/vh3ue14js.css';
import '../../css/e/e8goxlb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="vh3ue14js"/><path class="e8goxlb9r"/></g>`,
		"fallback": "humbleicons:incognito",
	});
}

export default Component;
