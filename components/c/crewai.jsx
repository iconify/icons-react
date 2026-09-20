import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfbllbm_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfbllbm_v"/>`,
		"fallback": "thesvg:crewai",
	});
}

export default Component;
