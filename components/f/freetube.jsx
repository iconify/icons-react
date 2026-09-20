import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b72h2zs-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b72h2zs-l"/>`,
		"fallback": "simple-icons:freetube",
	});
}

export default Component;
