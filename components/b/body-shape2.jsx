import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pha2xxb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pha2xxb7n"/>`,
		"fallback": "reicon:body-shape2",
	});
}

export default Component;
