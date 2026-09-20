import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f65x4gbxw.css';
import '../../css/w/w1jc-qglq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f65x4gbxw"/><path class="w1jc-qglq"/>`,
		"fallback": "vaadin:inbox",
	});
}

export default Component;
