import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j21j9ab8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j21j9ab8f"/>`,
		"fallback": "withicons:gem-solid",
	});
}

export default Component;
