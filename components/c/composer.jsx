import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg-zljz2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg-zljz2b"/>`,
		"fallback": "thesvg-color:composer",
	});
}

export default Component;
