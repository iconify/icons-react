import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xxcb1mbaj.css';
import '../../css/v/v77oyebef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xxcb1mbaj"/><path class="v77oyebef"/></g>`,
		"fallback": "keyline-icons:file-text-two-tone",
	});
}

export default Component;
