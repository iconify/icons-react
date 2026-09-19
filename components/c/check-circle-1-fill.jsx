import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7g7l5bvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k7g7l5bvq"/>`,
		"fallback": "iconamoon:check-circle-1-fill",
	});
}

export default Component;
