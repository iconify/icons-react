import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmcxs6-ll.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmcxs6-ll"/>`,
		"fallback": "memory:compass-north-west",
	});
}

export default Component;
