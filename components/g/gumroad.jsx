import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fer9r4bph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fer9r4bph"/>`,
		"fallback": "thesvg-color:gumroad",
	});
}

export default Component;
