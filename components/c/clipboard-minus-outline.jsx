import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3cnu0b3i.css';
import '../../css/e/e3rn21oia.css';
import '../../css/e/e67e0wblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3cnu0b3i"/><path class="e3rn21oia"/><path class="e67e0wblf"/>`,
		"fallback": "solar:clipboard-minus-outline",
	});
}

export default Component;
