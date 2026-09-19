import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/encu6lmxq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="encu6lmxq"/>`,
		"fallback": "at-icons:checkmark",
	});
}

export default Component;
