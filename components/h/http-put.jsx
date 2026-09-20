import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsq2kbeni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsq2kbeni"/>`,
		"fallback": "tabler:http-put",
	});
}

export default Component;
