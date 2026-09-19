import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jke0dgbou.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jke0dgbou"/>`,
		"fallback": "cib:creative-commons-nc-jp",
	});
}

export default Component;
