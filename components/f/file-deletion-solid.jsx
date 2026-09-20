import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6yuwkbig.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s6yuwkbig"/>`,
		"fallback": "pajamas:file-deletion-solid",
	});
}

export default Component;
