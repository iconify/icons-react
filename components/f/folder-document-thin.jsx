import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dnynulurz.css';
import '../../css/d/d3c1e1uyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="dnynulurz"/><path class="d3c1e1uyw"/></g>`,
		"fallback": "iconamoon:folder-document-thin",
	});
}

export default Component;
