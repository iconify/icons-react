import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je8y-zlbu.css';
import '../../css/p/p2qbusfri.css';
import '../../css/f/fcdqs1q8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je8y-zlbu"/><path class="p2qbusfri"/><path class="fcdqs1q8n"/>`,
		"fallback": "solar:fog-bold",
	});
}

export default Component;
