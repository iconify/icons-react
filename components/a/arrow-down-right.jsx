import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-3ob9bho.css';
import '../../css/j/j6vszybch.css';
import '../../css/t/tlsuctbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-3ob9bho wm-shadow"/><path class="j6vszybch wm-k"/><path class="tlsuctbpn wm-k"/>`,
		"fallback": "withicons-pastel:arrow-down-right",
	});
}

export default Component;
