import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo0uuy-7w.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo0uuy-7w"/>`,
		"fallback": "ps:cloudapp",
	});
}

export default Component;
