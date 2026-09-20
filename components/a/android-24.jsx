import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qox0n4a5t.css';
import '../../css/e/e05xc9bwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qox0n4a5t"/><path clip-rule="evenodd" class="e05xc9bwi"/>`,
		"fallback": "qlementine-icons:android-24",
	});
}

export default Component;
