import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4pqvcl0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4pqvcl0o"/>`,
		"fallback": "tabler:column-insert-left",
	});
}

export default Component;
