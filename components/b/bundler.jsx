import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo0ocib5l.css';

const viewBox = {"width":481,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo0ocib5l"/>`,
		"fallback": "file-icons:bundler",
	});
}

export default Component;
