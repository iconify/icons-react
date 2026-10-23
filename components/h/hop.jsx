import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g37290paz.css';
import '../../css/k/kmxwpvbav.css';
import '../../css/y/yfvansb7f.css';
import '../../css/v/v149j3b4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g37290paz"/><path class="kmxwpvbav"/><path class="yfvansb7f"/><path class="v149j3b4o"/></g>`,
		"fallback": "vadivam:hop",
	});
}

export default Component;
