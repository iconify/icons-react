import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtqm7xbra.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtqm7xbra"/>`,
		"fallback": "cib:gimp",
	});
}

export default Component;
