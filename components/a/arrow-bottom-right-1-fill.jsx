import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgo3wgb-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pgo3wgb-a"/>`,
		"fallback": "iconamoon:arrow-bottom-right-1-fill",
	});
}

export default Component;
