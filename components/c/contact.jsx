import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ryjcjykdw.css';
import '../../css/r/riikknfdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ryjcjykdw"/><path class="riikknfdi"/></g>`,
		"fallback": "vadivam:contact",
	});
}

export default Component;
