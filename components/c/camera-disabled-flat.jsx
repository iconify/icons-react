import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v25nw2bug.css';
import '../../css/y/yq5ptkbas.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="v25nw2bug"/><path class="yq5ptkbas"/></g>`,
		"fallback": "streamline-color:camera-disabled-flat",
	});
}

export default Component;
