import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7z6ubbny.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h7z6ubbny"/>`,
		"fallback": "gravity-ui:circles-intersection",
	});
}

export default Component;
