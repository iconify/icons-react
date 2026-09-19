import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg9fl3bal.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jg9fl3bal"/>`,
		"fallback": "healthicons:dry-mouth-outline",
	});
}

export default Component;
