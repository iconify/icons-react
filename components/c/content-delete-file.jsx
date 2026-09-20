import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9q2oebck.css';
import '../../css/g/gnnib_beb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9q2oebck"/><path clip-rule="evenodd" class="gnnib_beb"/>`,
		"fallback": "streamline-block:content-delete-file",
	});
}

export default Component;
