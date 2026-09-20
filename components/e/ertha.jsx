import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0nx1ob-p.css';
import '../../css/g/gxphms4pl.css';
import '../../css/x/xxhhmqarw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0nx1ob-p"/><path clip-rule="evenodd" class="gxphms4pl"/><path class="xxhhmqarw"/>`,
		"fallback": "token:ertha",
	});
}

export default Component;
