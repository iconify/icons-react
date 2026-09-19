import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j65qxbk-a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j65qxbk-a"/>`,
		"fallback": "cib:hashnode",
	});
}

export default Component;
