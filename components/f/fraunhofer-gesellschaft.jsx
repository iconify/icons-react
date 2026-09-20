import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkg9k32nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkg9k32nj"/>`,
		"fallback": "thesvg:fraunhofer-gesellschaft",
	});
}

export default Component;
