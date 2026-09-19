import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4iq1f7zn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w4iq1f7zn"/>`,
		"fallback": "gravity-ui:funnel-xmark",
	});
}

export default Component;
