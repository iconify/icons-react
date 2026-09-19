import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li9q4lu4g.css';
import '../../css/r/rvbsrrkcs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li9q4lu4g"/><path class="rvbsrrkcs"/>`,
		"fallback": "carbon:folder-move-to",
	});
}

export default Component;
