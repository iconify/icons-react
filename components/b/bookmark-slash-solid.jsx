import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2kge9byn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2kge9byn"/>`,
		"fallback": "heroicons:bookmark-slash-solid",
	});
}

export default Component;
