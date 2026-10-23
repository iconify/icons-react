import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r4fq8eb5w.css';
import '../../css/f/fkdpf6eac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r4fq8eb5w"/><path class="fkdpf6eac"/></g>`,
		"fallback": "vadivam:bolt",
	});
}

export default Component;
