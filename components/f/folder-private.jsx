import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgvb62whh.css';
import '../../css/q/qp9anacag.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgvb62whh"/><path class="qp9anacag"/>`,
		"fallback": "material-icon-theme:folder-private",
	});
}

export default Component;
