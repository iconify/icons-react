import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgv34el5t.css';
import '../../css/n/nsl4o5b_h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgv34el5t"/><path class="nsl4o5b_h"/>`,
		"fallback": "garden:file-generic-fill-20",
	});
}

export default Component;
