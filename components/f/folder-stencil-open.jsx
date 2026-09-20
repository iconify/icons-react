import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hha2vm2py.css';
import '../../css/c/cdocj7brz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hha2vm2py"/><path class="cdocj7brz"/>`,
		"fallback": "material-icon-theme:folder-stencil-open",
	});
}

export default Component;
