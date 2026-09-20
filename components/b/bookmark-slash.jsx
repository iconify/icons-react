import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghf9fibui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghf9fibui"/>`,
		"fallback": "reicon:bookmark-slash",
	});
}

export default Component;
