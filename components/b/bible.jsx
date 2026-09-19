import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrhq1cc2r.css';
import '../../css/i/ivt8o-bva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrhq1cc2r"/><path class="ivt8o-bva"/>`,
		"fallback": "boxicons:bible",
	});
}

export default Component;
