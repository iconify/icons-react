import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itl92zjdi.css';
import '../../css/r/rtxfoabgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="itl92zjdi"/><path class="rtxfoabgr"/>`,
		"fallback": "solar:condicioner-2-bold",
	});
}

export default Component;
