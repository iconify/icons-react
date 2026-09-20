import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duza7ob8o.css';
import '../../css/j/jve4vacnr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duza7ob8o"/><path class="jve4vacnr"/>`,
		"fallback": "material-icon-theme:folder-guard-open",
	});
}

export default Component;
