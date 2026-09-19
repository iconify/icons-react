import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plrv83b3c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plrv83b3c"/>`,
		"fallback": "famicons:information-circle",
	});
}

export default Component;
