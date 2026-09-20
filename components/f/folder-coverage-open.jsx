import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpc9hgrvp.css';
import '../../css/b/bwv8_8upf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpc9hgrvp"/><path class="bwv8_8upf"/>`,
		"fallback": "material-icon-theme:folder-coverage-open",
	});
}

export default Component;
