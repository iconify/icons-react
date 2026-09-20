import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdrm33fiz.css';
import '../../css/w/we0aawlvd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdrm33fiz"/><path class="we0aawlvd"/>`,
		"fallback": "material-icon-theme:folder-components-open",
	});
}

export default Component;
