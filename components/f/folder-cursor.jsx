import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2gdbkbzv.css';
import '../../css/e/ehmzf8bgn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2gdbkbzv"/><path class="ehmzf8bgn"/>`,
		"fallback": "material-icon-theme:folder-cursor",
	});
}

export default Component;
