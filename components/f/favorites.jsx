import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/m/m084llbuo.css';
import '../../css/d/d2ddiib0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="m084llbuo"/><path class="d2ddiib0q"/></g>`,
		"fallback": "lets-icons:favorites",
	});
}

export default Component;
