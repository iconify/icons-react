import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzh-dwbjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzh-dwbjq"/>`,
		"fallback": "thesvg-color:ericsson",
	});
}

export default Component;
