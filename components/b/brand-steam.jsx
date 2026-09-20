import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/btr6_dbev.css';
import '../../css/v/vr75-ilue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="btr6_dbev"/><path class="vr75-ilue"/></g>`,
		"fallback": "tabler:brand-steam",
	});
}

export default Component;
