import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dlba9996z.css';
import '../../css/o/o6fo5ybeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dlba9996z"/><path class="o6fo5ybeb"/></g>`,
		"fallback": "tabler:clock-plus",
	});
}

export default Component;
