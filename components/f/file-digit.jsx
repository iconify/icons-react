import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xotimvbjh.css';
import '../../css/f/fvf8orgvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xotimvbjh"/><path class="fvf8orgvg"/></g>`,
		"fallback": "tabler:file-digit",
	});
}

export default Component;
