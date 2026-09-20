import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yki1o-_ih.css';
import '../../css/t/t1kyvxf1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yki1o-_ih"/><path class="t1kyvxf1i"/></g>`,
		"fallback": "tabler:file-like",
	});
}

export default Component;
