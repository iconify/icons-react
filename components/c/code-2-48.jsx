import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkcr5wbci.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkcr5wbci"/>`,
		"fallback": "energy-icons:code-2-48",
	});
}

export default Component;
