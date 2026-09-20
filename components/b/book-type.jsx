import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r7oukd81u.css';
import '../../css/o/ot8yzyb7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r7oukd81u"/><path class="ot8yzyb7e"/></g>`,
		"fallback": "lucide:book-type",
	});
}

export default Component;
