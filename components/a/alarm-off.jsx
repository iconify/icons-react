import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpy0vg23g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpy0vg23g"/>`,
		"fallback": "circum:alarm-off",
	});
}

export default Component;
