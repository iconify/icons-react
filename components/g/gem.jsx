import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6p3zxbrz.css';
import '../../css/q/qdqb9b-3u.css';
import '../../css/p/p1jnd1y8i.css';
import '../../css/v/v0u0mb9pz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6p3zxbrz wm-k"/><path class="qdqb9b-3u wm-a"/><path class="p1jnd1y8i wm-k"/><path class="v0u0mb9pz wm-a"/>`,
		"fallback": "withicons-bauhaus:gem",
	});
}

export default Component;
