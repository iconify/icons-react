import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y086wwr5d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y086wwr5d"/>`,
		"fallback": "pajamas:chevron-double-lg-left",
	});
}

export default Component;
