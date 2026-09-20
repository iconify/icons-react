import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc8ang44w.css';
import '../../css/e/eh-2z7b3c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc8ang44w"/><path class="eh-2z7b3c"/>`,
		"fallback": "pajamas:duo-agentic-chat",
	});
}

export default Component;
