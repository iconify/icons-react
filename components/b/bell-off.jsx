import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cv1l7ypcz.css';
import '../../css/g/gci296i3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cv1l7ypcz"/><path class="gci296i3w"/></g>`,
		"fallback": "codex:bell-off",
	});
}

export default Component;
