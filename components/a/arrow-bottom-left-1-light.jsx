import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez4qt3bnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez4qt3bnd"/>`,
		"fallback": "iconamoon:arrow-bottom-left-1-light",
	});
}

export default Component;
