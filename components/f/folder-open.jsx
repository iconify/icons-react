import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruu0d2g3f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ruu0d2g3f"/>`,
		"fallback": "gravity-ui:folder-open",
	});
}

export default Component;
