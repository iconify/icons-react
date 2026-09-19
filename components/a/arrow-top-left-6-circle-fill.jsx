import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiy_c10-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aiy_c10-f"/>`,
		"fallback": "iconamoon:arrow-top-left-6-circle-fill",
	});
}

export default Component;
