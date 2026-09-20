import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8sj5ne3r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e8sj5ne3r"/>`,
		"fallback": "ix:control-list-box",
	});
}

export default Component;
