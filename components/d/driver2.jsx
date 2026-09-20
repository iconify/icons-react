import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zka2d_b1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zka2d_b1v"/>`,
		"fallback": "reicon:driver2",
	});
}

export default Component;
