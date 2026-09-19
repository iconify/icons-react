import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn_jpfb3s.css';

const viewBox = {"width":1024,"height":830};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn_jpfb3s"/>`,
		"fallback": "whh:checkmark",
	});
}

export default Component;
