import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2t00mbrv.css';
import '../../css/z/z3y6h9b-g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2t00mbrv"/><path class="z3y6h9b-g"/>`,
		"fallback": "material-icon-theme:folder-command",
	});
}

export default Component;
