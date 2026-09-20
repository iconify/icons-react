import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkb61lbnd.css';
import '../../css/q/qpkn_bweo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkb61lbnd"/><path class="qpkn_bweo"/>`,
		"fallback": "material-icon-theme:folder-shader-open",
	});
}

export default Component;
