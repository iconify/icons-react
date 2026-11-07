import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfjrhsbdn.css';
import '../../css/t/tvzowjb2p.css';
import '../../css/m/mym-u-jww.css';
import '../../css/b/bogwy2v0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfjrhsbdn"/><path clip-rule="evenodd" class="tvzowjb2p"/><path clip-rule="evenodd" class="mym-u-jww"/><path clip-rule="evenodd" class="bogwy2v0w"/>`,
		"fallback": "solar:cart-large-outline",
	});
}

export default Component;
