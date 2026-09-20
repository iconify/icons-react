import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-evrg8nb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o-evrg8nb"/>`,
		"fallback": "majesticons:bug-2",
	});
}

export default Component;
