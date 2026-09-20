import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a70wfjbze.css';
import '../../css/g/gydxa6b-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a70wfjbze"/><path class="gydxa6b-l"/></g>`,
		"fallback": "tabler:brand-pocket",
	});
}

export default Component;
