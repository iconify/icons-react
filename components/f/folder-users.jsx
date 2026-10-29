import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dqkskjbrf.css';
import '../../css/j/jv30wsq6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dqkskjbrf"/><path class="jv30wsq6n"/></g>`,
		"fallback": "vadivam:folder-users",
	});
}

export default Component;
