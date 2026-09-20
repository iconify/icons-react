import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/csxnyntbf.css';
import '../../css/l/lp2pad0nl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="csxnyntbf"/><path class="lp2pad0nl"/></g>`,
		"fallback": "tabler:clock-stop",
	});
}

export default Component;
