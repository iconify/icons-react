import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g7atk2t4y.css';
import '../../css/x/xrrwywbve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g7atk2t4y"/><path class="xrrwywbve"/></g>`,
		"fallback": "keyline-icons:cursor-off-two-tone",
	});
}

export default Component;
