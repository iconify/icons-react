import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rddvsb4-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rddvsb4-p"/>`,
		"fallback": "reicon:discover-filled",
	});
}

export default Component;
