import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3nbq0pup.css';

const viewBox = {"width":1792,"height":1504};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3nbq0pup"/>`,
		"fallback": "fa:commenting",
	});
}

export default Component;
