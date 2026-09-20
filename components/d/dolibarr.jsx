import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xenwn65bw.css';
import '../../css/p/pb3h_qhil.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xenwn65bw"/><ellipse class="pb3h_qhil"/>`,
		"fallback": "selfhst:dolibarr",
	});
}

export default Component;
