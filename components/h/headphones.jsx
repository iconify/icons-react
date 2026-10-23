import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zavfd_b0i.css';
import '../../css/e/ehxnasbzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zavfd_b0i"/><path class="ehxnasbzs"/></g>`,
		"fallback": "vadivam:headphones",
	});
}

export default Component;
