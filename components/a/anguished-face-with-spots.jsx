import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5zd7xsej.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5zd7xsej"/>`,
		"fallback": "pinhead:anguished-face-with-spots",
	});
}

export default Component;
