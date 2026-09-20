import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0xf62b4y.css';
import '../../css/e/e5i6xxbmr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e0xf62b4y"/><path class="e5i6xxbmr"/>`,
		"fallback": "streamline-plump:gift-solid",
	});
}

export default Component;
