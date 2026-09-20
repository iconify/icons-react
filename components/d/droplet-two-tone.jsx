import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uozyktirx.css';
import '../../css/z/z5pzvvpts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uozyktirx"/><path class="z5pzvvpts"/></g>`,
		"fallback": "keyline-icons:droplet-two-tone",
	});
}

export default Component;
