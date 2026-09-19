import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkud4olzl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkud4olzl"/>`,
		"fallback": "file-icons:commitizen",
	});
}

export default Component;
