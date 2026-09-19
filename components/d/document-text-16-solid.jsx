import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztazg6i9q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ztazg6i9q"/>`,
		"fallback": "heroicons:document-text-16-solid",
	});
}

export default Component;
