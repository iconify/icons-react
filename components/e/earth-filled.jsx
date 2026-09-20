import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r54-3ccgz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r54-3ccgz"/>`,
		"fallback": "lsicon:earth-filled",
	});
}

export default Component;
