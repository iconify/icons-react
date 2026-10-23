import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w7_jiub5n.css';
import '../../css/b/b5qebze5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w7_jiub5n"/><path class="b5qebze5e"/></g>`,
		"fallback": "vadivam:clock-plus",
	});
}

export default Component;
