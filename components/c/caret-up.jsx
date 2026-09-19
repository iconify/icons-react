import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuvwx4b4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuvwx4b4z"/>`,
		"fallback": "grommet-icons:caret-up",
	});
}

export default Component;
