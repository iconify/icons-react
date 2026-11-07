import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flc299r4o.css';
import '../../css/s/sy2gigbio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flc299r4o"/><path class="sy2gigbio"/>`,
		"fallback": "solar:add-folder-bold-duotone",
	});
}

export default Component;
