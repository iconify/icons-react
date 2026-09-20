import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dl2nz2boo.css';
import '../../css/r/rg6kv5b8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dl2nz2boo"/><path class="rg6kv5b8w"/></g>`,
		"fallback": "keyline-icons:grid-2x2-two-tone",
	});
}

export default Component;
