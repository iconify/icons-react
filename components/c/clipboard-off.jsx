import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/galu92n-e.css';
import '../../css/x/xo-fi5bmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="galu92n-e"/><path class="xo-fi5bmm"/></g>`,
		"fallback": "tabler:clipboard-off",
	});
}

export default Component;
