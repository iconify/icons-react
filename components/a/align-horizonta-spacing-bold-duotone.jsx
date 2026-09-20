import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rotba7baa.css';
import '../../css/c/c52h3c0el.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rotba7baa"/><path class="c52h3c0el"/>`,
		"fallback": "solar:align-horizonta-spacing-bold-duotone",
	});
}

export default Component;
