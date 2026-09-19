import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yojftwc6a.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yojftwc6a"/>`,
		"fallback": "dinkie-icons:finder-small",
	});
}

export default Component;
