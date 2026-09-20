import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kobw_0jsc.css';
import '../../css/e/eawuabc1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kobw_0jsc"/><path class="eawuabc1r"/></g>`,
		"fallback": "lucide:houses",
	});
}

export default Component;
