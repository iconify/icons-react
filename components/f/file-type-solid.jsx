import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gydi2jbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gydi2jbrt"/>`,
		"fallback": "iconaut:file-type-solid",
	});
}

export default Component;
