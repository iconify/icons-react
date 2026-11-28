import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztlf6xbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztlf6xbyy"/>`,
		"fallback": "noviair:film-x",
	});
}

export default Component;
