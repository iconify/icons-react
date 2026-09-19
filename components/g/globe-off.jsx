import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f8o0ncbxg.css';
import '../../css/n/nns7u-bms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f8o0ncbxg"/><path class="nns7u-bms"/></g>`,
		"fallback": "hugeicons:globe-off",
	});
}

export default Component;
