import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o7113wbzp.css';
import '../../css/g/gmzzdsb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o7113wbzp"/><path class="gmzzdsb9a"/></g>`,
		"fallback": "vadivam:archive-arrow-up",
	});
}

export default Component;
