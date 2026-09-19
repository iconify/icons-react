import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1ebk-e9c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1ebk-e9c"/>`,
		"fallback": "icon-park-outline:bar-code",
	});
}

export default Component;
