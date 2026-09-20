import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dcm7c4dqi.css';
import '../../css/x/xaa866hyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dcm7c4dqi"/><path class="xaa866hyh"/></g>`,
		"fallback": "keyline-icons:flag-chequered-two-tone",
	});
}

export default Component;
