import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvxttdb3n.css';
import '../../css/e/e6e9s9jif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvxttdb3n"/><path class="e6e9s9jif"/>`,
		"fallback": "basil:edit-solid",
	});
}

export default Component;
