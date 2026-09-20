import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jzwluwbtq.css';
import '../../css/r/r8riecbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jzwluwbtq"/><path class="r8riecbhi"/></g>`,
		"fallback": "tabler:face-mask",
	});
}

export default Component;
