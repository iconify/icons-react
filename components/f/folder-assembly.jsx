import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg171ebhl.css';
import '../../css/u/uga_xo1ks.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg171ebhl"/><path class="uga_xo1ks"/>`,
		"fallback": "material-icon-theme:folder-assembly",
	});
}

export default Component;
