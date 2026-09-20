import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bv3i6ko0o.css';
import '../../css/j/jurinlblr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bv3i6ko0o"/><path class="jurinlblr"/></g>`,
		"fallback": "tabler:device-ipad-question",
	});
}

export default Component;
