import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpl7iyi0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lpl7iyi0y"/>`,
		"fallback": "keyline-icons:circle-arrow-down-right-sharp-fill",
	});
}

export default Component;
