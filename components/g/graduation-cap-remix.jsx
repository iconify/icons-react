import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4wpf8y_e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y4wpf8y_e"/>`,
		"fallback": "streamline-plump:graduation-cap-remix",
	});
}

export default Component;
