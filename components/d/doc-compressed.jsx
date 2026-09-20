import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkszhcp6n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lkszhcp6n"/>`,
		"fallback": "pajamas:doc-compressed",
	});
}

export default Component;
