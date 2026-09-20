import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpc9hgrvp.css';
import '../../css/i/i3q4zpbdi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpc9hgrvp"/><path class="i3q4zpbdi"/>`,
		"fallback": "material-icon-theme:folder-enum-open",
	});
}

export default Component;
