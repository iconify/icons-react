import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmy9m9bik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmy9m9bik"/>`,
		"fallback": "iconamoon:comment-add-bold",
	});
}

export default Component;
