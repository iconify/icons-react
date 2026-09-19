import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmx2y7bil.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tmx2y7bil"/>`,
		"fallback": "gravity-ui:eyes-look-left",
	});
}

export default Component;
