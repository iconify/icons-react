import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l-quodbjv.css';
import '../../css/x/xlylm3b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l-quodbjv"/><path class="xlylm3b2y"/></g>`,
		"fallback": "keyline-icons:git-return-two-tone",
	});
}

export default Component;
