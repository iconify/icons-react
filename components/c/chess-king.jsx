import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y74p83nwv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y74p83nwv"/>`,
		"fallback": "fa7-regular:chess-king",
	});
}

export default Component;
