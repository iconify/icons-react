import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a_v2qqb6c.css';
import '../../css/z/zvc7enjdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a_v2qqb6c"/><path class="zvc7enjdx"/></g>`,
		"fallback": "lucide:brush-cleaning",
	});
}

export default Component;
