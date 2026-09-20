import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ilterikmh.css';
import '../../css/z/zshvdlp5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ilterikmh"/><path class="zshvdlp5g"/></g>`,
		"fallback": "tabler:chevrons-down-left",
	});
}

export default Component;
