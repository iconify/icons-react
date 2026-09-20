import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xgl5aikqu.css';
import '../../css/h/ho53ytlhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xgl5aikqu"/><path class="ho53ytlhs"/></g>`,
		"fallback": "tabler:dashboard",
	});
}

export default Component;
