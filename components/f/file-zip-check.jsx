import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcqb7divy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcqb7divy"/>`,
		"fallback": "noviair:file-zip-check",
	});
}

export default Component;
