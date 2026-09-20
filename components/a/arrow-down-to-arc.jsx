import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mi_udjwiv.css';
import '../../css/y/yxtj63b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mi_udjwiv"/><path class="yxtj63b1i"/></g>`,
		"fallback": "tabler:arrow-down-to-arc",
	});
}

export default Component;
