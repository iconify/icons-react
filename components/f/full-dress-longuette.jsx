import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr4lmhb4c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr4lmhb4c"/>`,
		"fallback": "icon-park-outline:full-dress-longuette",
	});
}

export default Component;
