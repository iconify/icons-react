import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvpr1296f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvpr1296f"/>`,
		"fallback": "proicons:add-rhombus",
	});
}

export default Component;
