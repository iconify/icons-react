import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilpg2j-hn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilpg2j-hn"/>`,
		"fallback": "thesvg-color:bat",
	});
}

export default Component;
