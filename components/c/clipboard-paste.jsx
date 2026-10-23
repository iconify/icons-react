import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/udcjzrb4o.css';
import '../../css/n/ngy432bhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="udcjzrb4o"/><path class="ngy432bhd"/></g>`,
		"fallback": "vadivam:clipboard-paste",
	});
}

export default Component;
