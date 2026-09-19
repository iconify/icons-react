import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqetb4f2f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bqetb4f2f"/>`,
		"fallback": "gravity-ui:folder-fill",
	});
}

export default Component;
