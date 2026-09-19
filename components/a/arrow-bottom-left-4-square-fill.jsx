import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvl_7yb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cvl_7yb1f"/>`,
		"fallback": "iconamoon:arrow-bottom-left-4-square-fill",
	});
}

export default Component;
