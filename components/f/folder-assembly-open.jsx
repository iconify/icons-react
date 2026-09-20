import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3p6b1b2l.css';
import '../../css/u/uga_xo1ks.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3p6b1b2l"/><path class="uga_xo1ks"/>`,
		"fallback": "material-icon-theme:folder-assembly-open",
	});
}

export default Component;
