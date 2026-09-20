import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e957222re.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e957222re"/>`,
		"fallback": "ooui:down-triangle",
	});
}

export default Component;
