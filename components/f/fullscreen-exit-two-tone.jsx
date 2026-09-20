import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lq48qtbtv.css';
import '../../css/l/ldnrvyb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lq48qtbtv"/><path class="ldnrvyb3m"/></g>`,
		"fallback": "keyline-icons:fullscreen-exit-two-tone",
	});
}

export default Component;
