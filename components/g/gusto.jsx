import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt9ac1boh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt9ac1boh"/>`,
		"fallback": "thesvg-color:gusto",
	});
}

export default Component;
