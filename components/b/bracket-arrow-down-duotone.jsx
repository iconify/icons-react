import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rdaefybbb.css';
import '../../css/y/yj0rwwbzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rdaefybbb"/><path class="yj0rwwbzi"/></g>`,
		"fallback": "keyline-icons:bracket-arrow-down-duotone",
	});
}

export default Component;
