import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvt-etbdx.css';
import '../../css/s/sh3jq6b7q.css';
import '../../css/g/gr0sanbkg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvt-etbdx"/><path class="sh3jq6b7q"/><ellipse class="gr0sanbkg"/>`,
		"fallback": "nimbus:camera",
	});
}

export default Component;
