import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s85zem2-k.css';
import '../../css/x/xon_9ib8a.css';
import '../../css/i/i2j9gzb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s85zem2-k"/><path class="xon_9ib8a"/><path class="i2j9gzb7h"/></g>`,
		"fallback": "keyline-icons:eye-sparkles-two-tone",
	});
}

export default Component;
