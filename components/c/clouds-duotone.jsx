import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l-g8wqzix.css';
import '../../css/c/cht1h3b6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l-g8wqzix"/><path clip-rule="evenodd" class="cht1h3b6h"/></g>`,
		"fallback": "keyline-icons:clouds-duotone",
	});
}

export default Component;
