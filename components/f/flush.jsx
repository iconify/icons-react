import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4uu2zbue.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4uu2zbue"/>`,
		"fallback": "picon:flush",
	});
}

export default Component;
