import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmq9zib2l.css';
import '../../css/g/gv3xfmb6k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmq9zib2l"/><path class="gv3xfmb6k"/>`,
		"fallback": "vaadin:insert",
	});
}

export default Component;
