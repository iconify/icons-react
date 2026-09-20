import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zabn7ccvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zabn7ccvz"/>`,
		"fallback": "thesvg-color:fusionauth",
	});
}

export default Component;
