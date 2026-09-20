import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1g3lxbgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1g3lxbgz"/>`,
		"fallback": "tabler:currency-yuan",
	});
}

export default Component;
