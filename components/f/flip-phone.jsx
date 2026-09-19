import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/fy1m_5xsk.css';
import '../../css/o/onrfcqbbo.css';
import '../../css/x/x2mv1qbxz.css';
import '../../css/i/i7q93plkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="fy1m_5xsk"/><path class="onrfcqbbo"/><path class="x2mv1qbxz"/><path class="i7q93plkz"/></g>`,
		"fallback": "hugeicons:flip-phone",
	});
}

export default Component;
