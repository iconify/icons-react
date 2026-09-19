import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-85kbc4h.css';

const viewBox = {"width":466,"height":754};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-85kbc4h"/>`,
		"fallback": "ls:h",
	});
}

export default Component;
