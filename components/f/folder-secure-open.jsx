import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov4w-vcsn.css';
import '../../css/w/w7jijrg7e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov4w-vcsn"/><path class="w7jijrg7e"/>`,
		"fallback": "material-icon-theme:folder-secure-open",
	});
}

export default Component;
