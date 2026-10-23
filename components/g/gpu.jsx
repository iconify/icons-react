import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jr_6r4_9f.css';
import '../../css/n/ntkp1bbam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jr_6r4_9f"/><path class="ntkp1bbam"/></g>`,
		"fallback": "vadivam:gpu",
	});
}

export default Component;
