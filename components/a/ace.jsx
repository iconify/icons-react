import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izu0r0bdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izu0r0bdb"/>`,
		"fallback": "thesvg:ace",
	});
}

export default Component;
