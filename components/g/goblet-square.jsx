import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azman8bht.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azman8bht"/>`,
		"fallback": "ep:goblet-square",
	});
}

export default Component;
