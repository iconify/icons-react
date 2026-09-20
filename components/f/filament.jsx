import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-woqwava.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-woqwava"/>`,
		"fallback": "thesvg:filament",
	});
}

export default Component;
