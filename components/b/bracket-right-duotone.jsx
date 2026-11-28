import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be-0ib18l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be-0ib18l primary"/>`,
		"fallback": "iconaut:bracket-right-duotone",
	});
}

export default Component;
