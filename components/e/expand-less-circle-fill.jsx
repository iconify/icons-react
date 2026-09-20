import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8ltq07ep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j8ltq07ep"/>`,
		"fallback": "si:expand-less-circle-fill",
	});
}

export default Component;
