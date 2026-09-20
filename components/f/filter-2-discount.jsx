import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzwl35boe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzwl35boe"/>`,
		"fallback": "tabler:filter-2-discount",
	});
}

export default Component;
