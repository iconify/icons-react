import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz9r51iha.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nz9r51iha"/>`,
		"fallback": "qlementine-icons:drive-16",
	});
}

export default Component;
