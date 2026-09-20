import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt1ztnb6x.css';
import '../../css/l/ldryaf89d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt1ztnb6x"/><path class="ldryaf89d"/>`,
		"fallback": "streamline-ultimate:bing-logo-bold",
	});
}

export default Component;
