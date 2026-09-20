import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlsw8r0tr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlsw8r0tr"/>`,
		"fallback": "tabler:code-variable-minus",
	});
}

export default Component;
