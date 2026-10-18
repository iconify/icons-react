import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/od4n5wbvd.css';
import '../../css/i/i4p5t1bix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="od4n5wbvd"/><path class="i4p5t1bix"/></g>`,
		"fallback": "vadivam:eye-off",
	});
}

export default Component;
