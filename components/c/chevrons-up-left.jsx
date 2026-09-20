import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgq__9z0g.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgq__9z0g"/>`,
		"fallback": "jam:chevrons-up-left",
	});
}

export default Component;
