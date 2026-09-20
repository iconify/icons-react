import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejn6zqcld.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ejn6zqcld"/>`,
		"fallback": "streamline-plump:ai-science-robot-remix",
	});
}

export default Component;
