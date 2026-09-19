import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr2yywbgt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr2yywbgt"/>`,
		"fallback": "bi:file-break",
	});
}

export default Component;
