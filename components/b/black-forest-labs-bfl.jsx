import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8goj0b8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8goj0b8v"/>`,
		"fallback": "thesvg:black-forest-labs-bfl",
	});
}

export default Component;
