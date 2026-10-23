import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zxeu-e02l.css';
import '../../css/w/we8nrdbil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zxeu-e02l"/><path class="we8nrdbil"/></g>`,
		"fallback": "vadivam:crop",
	});
}

export default Component;
