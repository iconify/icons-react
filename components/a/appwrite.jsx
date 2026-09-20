import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/danba2wvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="danba2wvv"/>`,
		"fallback": "thesvg:appwrite",
	});
}

export default Component;
