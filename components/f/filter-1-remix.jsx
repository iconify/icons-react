import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy_pu7xll.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dy_pu7xll"/>`,
		"fallback": "streamline-plump:filter-1-remix",
	});
}

export default Component;
