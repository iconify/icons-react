import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lxogbhe7j.css';
import '../../css/k/kzu7rxw3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lxogbhe7j"/><path class="kzu7rxw3t"/></g>`,
		"fallback": "vadivam:book-key",
	});
}

export default Component;
