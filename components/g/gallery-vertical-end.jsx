import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lld8t-6gl.css';
import '../../css/n/nxnw64b0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lld8t-6gl"/><rect class="nxnw64b0f"/></g>`,
		"fallback": "lucide:gallery-vertical-end",
	});
}

export default Component;
