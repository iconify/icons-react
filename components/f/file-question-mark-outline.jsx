import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4xmzwl1u.css';
import '../../css/x/x5se19b3w.css';
import '../../css/d/d25mwn3tm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4xmzwl1u"/><path class="x5se19b3w"/><path clip-rule="evenodd" class="d25mwn3tm"/>`,
		"fallback": "solar:file-question-mark-outline",
	});
}

export default Component;
