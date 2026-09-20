import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brqcmhv-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brqcmhv-e"/>`,
		"fallback": "tabler:device-unknown-filled",
	});
}

export default Component;
