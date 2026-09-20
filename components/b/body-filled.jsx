import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el4tedkjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el4tedkjs"/>`,
		"fallback": "reicon:body-filled",
	});
}

export default Component;
