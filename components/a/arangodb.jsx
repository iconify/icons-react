import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b08pg7cly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b08pg7cly"/>`,
		"fallback": "simple-icons:arangodb",
	});
}

export default Component;
