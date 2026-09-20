import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2gdbkbzv.css';
import '../../css/d/dn50i0run.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2gdbkbzv"/><path class="dn50i0run"/>`,
		"fallback": "material-icon-theme:folder-jinja",
	});
}

export default Component;
