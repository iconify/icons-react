import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmh7oqbps.css';

const viewBox = {"width":467,"height":754};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmh7oqbps"/>`,
		"fallback": "ls:7",
	});
}

export default Component;
