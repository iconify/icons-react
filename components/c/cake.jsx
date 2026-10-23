import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o994xj5mf.css';
import '../../css/j/jciaagshe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o994xj5mf"/><path class="jciaagshe"/></g>`,
		"fallback": "vadivam:cake",
	});
}

export default Component;
