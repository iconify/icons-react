import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbnbyk57b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dbnbyk57b"/>`,
		"fallback": "solar:compass-big-outline",
	});
}

export default Component;
