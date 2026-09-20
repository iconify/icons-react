import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hha2vm2py.css';
import '../../css/b/bz8x9x0cb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hha2vm2py"/><path class="bz8x9x0cb"/>`,
		"fallback": "material-icon-theme:folder-cue-open",
	});
}

export default Component;
