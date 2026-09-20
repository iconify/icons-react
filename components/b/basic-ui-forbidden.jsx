import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phl8qmbro.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="phl8qmbro"/>`,
		"fallback": "streamline-block:basic-ui-forbidden",
	});
}

export default Component;
