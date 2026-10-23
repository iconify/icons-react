import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bjy7e6bar.css';
import '../../css/u/uurqwjb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bjy7e6bar"/><path class="uurqwjb7q"/></g>`,
		"fallback": "vadivam:clock-arrow-down",
	});
}

export default Component;
