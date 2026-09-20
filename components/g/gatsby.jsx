import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ralofz4_e.css';
import '../../css/k/ke769lv4w.css';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ralofz4_e"/><path class="ke769lv4w"/>`,
		"fallback": "material-icon-theme:gatsby",
	});
}

export default Component;
