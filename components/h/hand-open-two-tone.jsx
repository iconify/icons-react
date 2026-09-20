import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xr6qiq71e.css';
import '../../css/f/fh4t5c1yn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xr6qiq71e"/><path class="fh4t5c1yn"/></g>`,
		"fallback": "keyline-icons:hand-open-two-tone",
	});
}

export default Component;
