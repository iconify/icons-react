import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xym44vlld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xym44vlld"/>`,
		"fallback": "meteor-icons:get-pocket",
	});
}

export default Component;
