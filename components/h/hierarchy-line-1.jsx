import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epwuo5bgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epwuo5bgr"/>`,
		"fallback": "streamline-sharp-color:hierarchy-line-1",
	});
}

export default Component;
