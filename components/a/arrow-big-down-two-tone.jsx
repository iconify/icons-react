import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mma31mmrc.css';
import '../../css/r/r5kslbl5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mma31mmrc"/><path class="r5kslbl5f"/></g>`,
		"fallback": "keyline-icons:arrow-big-down-two-tone",
	});
}

export default Component;
