import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hw7_it2md.css';
import '../../css/e/e9j57ubtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="hw7_it2md"/><path class="e9j57ubtw"/></g>`,
		"fallback": "lucide:folder-search-2",
	});
}

export default Component;
