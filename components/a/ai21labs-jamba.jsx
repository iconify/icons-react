import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io3xdv68f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io3xdv68f"/>`,
		"fallback": "thesvg-color:ai21labs-jamba",
	});
}

export default Component;
