import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/roirlnb4m.css';
import '../../css/c/cy_8ufpuf.css';
import '../../css/x/xc7-d2fex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="roirlnb4m"/><path class="cy_8ufpuf"/><path class="xc7-d2fex"/></g>`,
		"fallback": "lucide:candy",
	});
}

export default Component;
