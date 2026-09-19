import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbiz79bon.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbiz79bon"/>`,
		"fallback": "file-icons:assembly-hitachi",
	});
}

export default Component;
