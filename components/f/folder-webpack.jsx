import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2t00mbrv.css';
import '../../css/c/cc68579in.css';
import '../../css/l/lp2zuwhka.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2t00mbrv"/><path class="cc68579in"/><path class="lp2zuwhka"/>`,
		"fallback": "material-icon-theme:folder-webpack",
	});
}

export default Component;
