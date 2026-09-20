import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le890tb8e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="le890tb8e"/>`,
		"fallback": "streamline-plump:building-office-solid",
	});
}

export default Component;
