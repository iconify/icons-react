import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo995zbcu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo995zbcu"/>`,
		"fallback": "file-icons:emacs",
	});
}

export default Component;
