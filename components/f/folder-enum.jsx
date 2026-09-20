import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l47nr7bbh.css';
import '../../css/i/i3q4zpbdi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l47nr7bbh"/><path class="i3q4zpbdi"/>`,
		"fallback": "material-icon-theme:folder-enum",
	});
}

export default Component;
