import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py_bgqbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py_bgqbvu"/>`,
		"fallback": "feather:delete",
	});
}

export default Component;
