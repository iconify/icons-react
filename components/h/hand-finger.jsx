import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/djift2p2a.css';
import '../../css/g/gvi6q-b4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="djift2p2a"/><path class="gvi6q-b4n"/></g>`,
		"fallback": "tabler:hand-finger",
	});
}

export default Component;
