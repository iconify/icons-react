import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpoxny2nn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpoxny2nn"/>`,
		"fallback": "tabler:flag-pause",
	});
}

export default Component;
