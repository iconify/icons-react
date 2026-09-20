import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iein70b1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iein70b1s"/>`,
		"fallback": "thesvg:diagramsdotnet",
	});
}

export default Component;
