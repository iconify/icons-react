import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6nbuubyw.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6nbuubyw"/>`,
		"fallback": "fontisto:database",
	});
}

export default Component;
