import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v8m7q2l2l.css';
import '../../css/g/gzdfuhbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v8m7q2l2l"/><path class="gzdfuhbvj"/></g>`,
		"fallback": "vadivam:container",
	});
}

export default Component;
