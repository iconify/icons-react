import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgilk566a.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgilk566a"/>`,
		"fallback": "jam:chevron-down",
	});
}

export default Component;
