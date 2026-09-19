import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlh4lswzd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hlh4lswzd"/>`,
		"fallback": "healthicons:baby-female-0306m-outline",
	});
}

export default Component;
