import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snhhpl1co.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snhhpl1co"/>`,
		"fallback": "ri:folder-add-line",
	});
}

export default Component;
