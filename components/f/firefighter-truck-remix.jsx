import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3n8jebnt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u3n8jebnt"/>`,
		"fallback": "streamline-plump:firefighter-truck-remix",
	});
}

export default Component;
