import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmfzwksnq.css';
import '../../css/d/d25mwn3tm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmfzwksnq"/><path clip-rule="evenodd" class="d25mwn3tm"/>`,
		"fallback": "solar:file-type-outline",
	});
}

export default Component;
