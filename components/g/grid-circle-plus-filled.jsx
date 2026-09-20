import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qph4_1bif.css';
import '../../css/d/d9tus8bdi.css';
import '../../css/a/apqkilkyv.css';
import '../../css/c/c8540bbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qph4_1bif"/><circle class="d9tus8bdi"/><circle class="apqkilkyv"/><circle class="c8540bbmd"/></g>`,
		"fallback": "reicon:grid-circle-plus-filled",
	});
}

export default Component;
